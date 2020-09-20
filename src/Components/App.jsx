import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
const [notesArr,addNotesArr]=useState([])

  function handleClick(notes)
  {
  addNotesArr(prevValue=>
    {
      return[...prevValue,
        notes
      ]
    })
    console.log(notesArr);
  }
return (
    <div>
      <Header />
      <CreateArea  onClicked={handleClick} />
      {notesArr.map((notes)=>  <Note key={1} title={notes.title} content={notes.content} /> )}
    
      <Footer />
    </div>
  );
}
export default App;
