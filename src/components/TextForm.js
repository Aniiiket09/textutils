import React,{useState} from 'react';

export default function TextForm(props) {

const handleUpClick =() =>{
// console.log("Upper case was clicked :" + text)
let newText = text.toUpperCase();
setText(newText);
}

const handleLoClick =() =>{
// console.log("Upper case was clicked :" + text)
let newText = text.toLowerCase();
setText(newText);
}
const handleclearClick =() =>{
    // console.log("Upper case was clicked :" + text)
    let newText = '';
    setText(newText);
    }
    const handleLocLoClick =() =>{
        // console.log("Upper case was clicked :" + text)
        let newText = text.toLocaleLowerCase();
        setText(newText);
        }
    
const handleOnChange= (event) =>{
// console.log("On Change")
setText(event.target.value)
}
const handleCopy=()=>{
 
    var text= document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
}
const handleExtraSpaces= () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
}

const [text, setText]= useState('Enter text here');
// text ="new state" // wrong way to change the state
// setText="new state anything" // correct way to change the state
return (
<>

<div className='container'>
    <h1>{props.heading}</h1>

<div className="mb-3">

<textarea className="form-control"  value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>

<button className='btn btn-primary mx-2'  onClick={handleUpClick}> Convert to Uppercase</button>

<button className='btn btn-primary  mx-2'  onClick={handleLoClick}> Convert to Lowercase</button>
<button className='btn btn-primary  mx-2'  onClick={handleclearClick}> Clear</button>

<button className='btn btn-primary  mx-2'  onClick={handleLocLoClick}> Try it</button>
<button className='btn btn-primary  mx-2'  onClick={handleCopy}> Copy Text</button>
<button className='btn btn-primary  mx-2'  onClick={handleExtraSpaces}> Remove Extra Spaces</button>
</div>

<div className="container">
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length } minutes to read words</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
)
}
