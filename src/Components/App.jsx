import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../Notes"
function App()
{
    return <div><Header/>
    <Note key={Notes[0].key} title={Notes[0].title} content={Notes[0].content}/>
    <Footer/>
    </div>
}
export default App;