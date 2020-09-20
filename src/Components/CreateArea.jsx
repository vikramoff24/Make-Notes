import React,{useState} from "react";

function CreateArea(props) {
    const [notes,setNotes]=useState({
        title:"",
        content:""
      });
      function handleChange(event)
{
const {name, value }=event.target;
setNotes((prevValue)=>{
return {...prevValue,
    [name]:value}
})
}
return (
 <div>
<form autocomplete="off">
        <input name="title" placeholder="Title"  value={notes.title} onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={notes.content} onChange={handleChange} />
        <button onClick= {(event)=>
        {
            props.onClicked(notes);
            setNotes({
                title:"",
                content:"" 
            });
event.preventDefault();
}}>Add</button>
      </form>
    </div>
  );
}
export default CreateArea;
