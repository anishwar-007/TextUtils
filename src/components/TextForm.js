import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("Converted to Upper Case","success")
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success") 
    }
    const handleOnChange = (event) =>{
        // console.log("On change is clicked");
        setText(event.target.value)
    }
    const [text,setText] = useState('');
    return ( 
        <>
    <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to Lowercase</button>
    </div>
    <div className="container my-3">
        <h1>Your text Summary</h1>
        <p>   {text.split(" ").length} words and {text.length} characters  </p>
        <p>  {0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter in the Text Box above to preview '}</p>
    </div>
    </>  
    )
}
