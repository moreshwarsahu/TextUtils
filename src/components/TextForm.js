import React, { useState } from 'react'

export default function TextForm(props) {

  const upClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }

  const loClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }

  const clearClick = () => {
    let newText = ' ';
    setText(newText)
  }

  const copyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  } 

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter the text here');
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white':'#212121' , color: props.mode === 'dark' ? 'white':'black'}} id="myBox" rows="8"></textarea>
          <br />
          <button className="btn btn-primary mx-1" onClick={upClick}>convert to uppercase</button>
          <button className="btn btn-primary mx-1" onClick={loClick}>convert to lowercase</button>
          <button className="btn btn-primary mx-1" onClick={clearClick}>clear</button>    
          <button className="btn btn-primary mx-1" onClick={copyClick}>copy to clipboard</button>

        </div>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark' ? 'white':'black'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters <br />
          { 0.008 * text.split(" ").length } minutes taken to read.
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
