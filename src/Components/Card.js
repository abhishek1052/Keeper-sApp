import React from 'react'
const Card = (props) => {
    const [title,settitle]=React.useState("");
    const [data,setdata]=React.useState("");
    function changetitle(event){
        settitle(event.target.value);
    }
    function changedata(event){
        setdata(event.target.value);
    }
    function clicked(event){
        props.addnote({title,data});
        event.preventDefault();
    }
    return (
        <div className='card' >
            <form action="#">
            < input name='title' onChange={changetitle}  type="text" className='cardinput1' placeholder={props.input1} />
            < input name='data' onChange={changedata} type="text" className='cardinput2' placeholder={props.input2} />
            <button onClick={clicked}  className='button'>
                ADD
            </button>
            </form>
        </div>
    )
}
export default Card
