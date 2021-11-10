import React , {useState} from 'react';
import NoteForm from './components/NoteForm.jsx';
import NotesList from './components/NotesList.jsx';


function App() {

  const [update , setUpdate] = useState(null);



  return (
    <div>
   
      <header>
      <h1>Note App</h1>
    </header>

      <NoteForm update={update} setUpdate={setUpdate}  />
      <NotesList setUpdate={setUpdate}  />

      {/* <footer>
        <p>@created by hanaraz</p>
      </footer>
 */}


    </div>
  );
}

export default App;
