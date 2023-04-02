import React, {useState} from 'react'

export default function TextFrom(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=>{
        console.log("Lowercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleCopyClick = ()=>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const RemoveExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
    }
    

    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value)
    }


    const [text, setText] = useState('')
    return (
        <>
            <div className='container'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase </button>
                <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to LowerCase </button>
                <button className='btn btn-primary mx-1' onClick={RemoveExtraSpace}>Remove Extra Space </button>
                <button className='btn btn-primary mx-1' onClick={handleCopyClick}>Copy Text </button>
                <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text </button>


            </div>
            <div className="container my-3">
                <h4>Text Summary</h4>
                <p>{text.split(" ").length} words</p>
                <p>{text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} words Read</p>
                <h5>Previwe</h5>
                <p>{text}</p>
            </div>
        </>
  )
}
