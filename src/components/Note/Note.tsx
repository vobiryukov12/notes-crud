import { INote } from '../../models/models';
import './note.scss';

interface INoteProps {
  note: INote,
  handleDelete: (id: number) => void
}

export function Note({ note, handleDelete }: INoteProps) {
  return (
    <div className='note'>
      <div className="note__text">{note.content}</div>
      <div className="note__close" onClick={() => handleDelete(note.id)}>X</div>
    </div>
  );
}
