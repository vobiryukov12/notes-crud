import './App.scss';
import { FormNotes } from './components/FormNotes';
import { Notes } from './components/Notes';
import { useFormNotes } from './hooks/formNotes';
import { useNotes } from './hooks/notes';

function App() {
  const { notes, loading, error, addNote, deleteNote, getNotes } = useNotes();
  const { handleSubmit, handleChange, value, formError } = useFormNotes(addNote);

  return (
    <div className='app'>
      <FormNotes 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={value}
        formError={formError}
      />

      <Notes 
        notes={notes}
        loading={loading}
        error={error}
        handleDelete={deleteNote}
        handleUpdate={getNotes}
      />
    </div>
  );
}

export default App;
