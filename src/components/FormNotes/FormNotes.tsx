import './formNotes.scss';
import { ErrorMessage } from '../ErrorMessage';

interface IFormNotesProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
  value: string,
  formError: string
}

export function FormNotes({ handleSubmit, handleChange, value, formError }: IFormNotesProps) {
  return (
    <form className="form" onSubmit={handleSubmit} >   
      <div className="form__field">
        <label className="form__label" htmlFor="note">Новая заметка</label>
        <textarea 
          className="form__textarea" 
          id="note" 
          name="note"
          placeholder="Заметка"
          value={value}
          onChange={handleChange}
        />
        { formError && <ErrorMessage error={formError} />}
      </div>

      <button className="form__button" type="submit">Добавить</button>
    </form>
  );
}
