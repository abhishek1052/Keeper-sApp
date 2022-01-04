import React from 'react'

const Notes = (props) => {
    function del(){
        props.onDelete(props.id);
    }
    return (
        <>
        <div className='Notes' >
            <h1 style={{ textAlign:"center",textOverflow:"hidden" ,wordBreak:"break-word"  }}>
            {props.input1}
            </h1>
            <br />
            <p style={{ textAlign:"center",textOverflow:"hidden" ,wordBreak:"break-word" }} >
            {props.input2}
            </p>
            <button onClick={del} className='but'>
                Delete
            </button>
        </div>
        </>
    )
}

export default Notes
