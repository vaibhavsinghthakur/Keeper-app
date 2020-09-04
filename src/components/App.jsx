import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App(){
    
    const [array,setArray]=useState([]);

    function addNote(newnote){
      setArray(prevNotes=>{
          return [...prevNotes,newnote];
      });
    }

    function deleteNote(id){
       setArray(prevNotes=>{
          return prevNotes.filter((noteitem,index)=>{
             return index!==id;
           })
       })
    }


    return <div>
        <Header/>
        <CreateArea onAdd={addNote}/>
        {array.map((noteitem,index) => {
            return <Note
              key={index}
              id={index}
              title={noteitem.title}
              content={noteitem.content}
              onDelete={deleteNote}
          />
        })
        }
         <Footer/>
    </div>
}

export default App;