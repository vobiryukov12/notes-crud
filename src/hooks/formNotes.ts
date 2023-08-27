import { useState } from "react";
import { INote } from "../models/models";

export function useFormNotes(addNote: (note: INote) => void) {
  const [value, setValue] = useState<string>('');
  const [formError, setFormError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormError('');

    if (value.trim().length === 0) {
      setFormError('Пожалуйста, введите корректные данные');
      return;
    }

    const response = await fetch('http://localhost:3000/notes', {
      method: 'POST', 
      body: JSON.stringify({
        id: '',
        content: value
      }),
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();

    setValue('');

    addNote(data);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setValue(value);
  };

  return { handleSubmit, handleChange, value, formError }
}
