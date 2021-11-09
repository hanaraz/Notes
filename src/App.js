import NoteForm from './components/NoteForm.jsx';
import NotesList from './components/NotesList.jsx';

function App() {

  return (
    <div>
   
      <header>
      <h1>Note App</h1>
    </header>

      <NoteForm />
      <NotesList />

      <footer>
        <p>@created by hanaraz</p>
      </footer>



    </div>
  );
}

export default App;
