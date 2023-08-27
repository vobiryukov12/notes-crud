import { useEffect, useState } from "react";
import { INote } from "../models/models";

export function useNotes() {
  const [notes, setNotes] = useState<INote[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const addNote = (note: INote) => {
    setNotes(prev => [...prev, note]);
  };

  async function deleteNote(id: number) {
    await fetch(`http://localhost:3000/notes/${id}`, {
      method: 'DELETE'
    });

    setNotes(prev => prev.filter(note => note.id !== id));
  }

  async function getNotes() {
    try {
      setError('');
      setLoading(true);
      const url = 'http://localhost:3000/notes';
      const response = await fetch(url);
      const data = await response.json();
      setNotes(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      const error = new Error(" Ого, ошибка! o_O");
      setError(error.message);
    }
  }

  useEffect(() => {
    getNotes();
  }, []);

  return { notes, loading, error, addNote, deleteNote, getNotes };
}
