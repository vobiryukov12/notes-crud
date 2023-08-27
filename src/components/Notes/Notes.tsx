import { INote } from '../../models/models';
import { ErrorMessage } from '../ErrorMessage';
import { Loader } from '../Loader';
import { Note } from '../Note';
import './notes.scss';

interface INotesProps {
  notes: INote[],
  loading: boolean,
  error: string,
  handleDelete: (id: number) => void,
  handleUpdate: () => void
}

export function Notes({ notes, loading, error, handleDelete, handleUpdate }: INotesProps) {
  return (
    <div className='notes'>
      <div className="notes__header">
        <h1 className='notes__title'>Заметки</h1>
        <button className='notes__button' type='button' onClick={handleUpdate}>Обновить</button>
      </div>
      <div className="notes__body">
        <div className="notes__message">
          { loading && <Loader /> }
          { error && <ErrorMessage error={error}/> }
        </div>
        <div className="notes__content">
          { notes.map(note => <Note handleDelete={handleDelete} key={note.id} note={note} />) }
        </div>
      </div>
    </div>
  );
}
