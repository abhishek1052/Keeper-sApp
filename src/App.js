import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Notes from './Components/Notes';
import Card from './Components/Card';
function App() {
  const [dataarr,setarr]=React.useState([]);
  function addN(newnotes){
    setarr((dataarr)=>{
      return [...dataarr,newnotes];
    })
  }
  function delN(id){
    setarr(prevNotes => {
      return prevNotes.filter((notes, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
    <Navbar name="Keeper" />
    <div className='flex-container1' >
    <Card input1="Title" input2="Take a Note" addnote={addN} />
    </div  >
    <div className='container2' >
    {dataarr.map((obj,index)=>{
      return <Notes input1={obj.title} input2={obj.data} id={index} key={index} onDelete={delN} />
    })}
    </div>
    </>
  );
}

export default App;
