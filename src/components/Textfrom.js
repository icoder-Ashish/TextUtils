// Here we use hooks(Without making a class it provide the functionality to use class property)
       import React,{useState} from 'react'
       
       export default function Textfrom(props) 
       {

        const onChangehandler = (event)=>{
            setText(event.target.value)
        } 
        const UpperCaseHandler = ()=>{
            let newText = text.toUpperCase();
            setText(newText)
            
        } 
        const LowerCaseHandler = ()=>{
            let newText = text.toLowerCase();
            setText(newText)
        } 
        const copyAllTextHandler = ()=>{
            let newText = document.getElementById("myBox");
            newText.select();
            navigator.clipboard.writeText(newText.value);
        } 
        const clearTextHandler = ()=>{
           
            setText("")
           
        } 
        const removeExtraSpace = ()=>{
            let newText = text.split(/[ ]+/); //rejax it is a part of js
            setText(newText.join(" "))
           
        } 
       

            // how's useState wark const [state, setstate] = useState(initialState)
            //state means value="text" of input tag and setText is a function used to update text
           const [text, setText] = useState('')
           return (
               
    
               <>
                <div className = "container" style={{color: props.mode ==='light' ? 'dark':'light' }}>
                   <div className="mb-3 my-5">
                         <h1>{props.heading} </h1>
                        <textarea className="form-control" value={text} style={{backgroundColor: props.mode ==='light' ? 'light' : '#2f3f50',color: props.mode ==='light' ? 'black' : 'white' }} id="myBox" rows="9" onChange={onChangehandler} ></textarea>
                    </div>
                            <button type="button" className="btn btn-primary mx-3" onClick={UpperCaseHandler} >ChangeUpperCase</button>
                            <button type="button" className="btn btn-primary mx-3" onClick={LowerCaseHandler} >ChangeLowerCase</button>
                            <button type="button" className="btn btn-primary mx-3" onClick={copyAllTextHandler} >CopyAllText</button>
                            <button type="button" className="btn btn-primary mx-3" onClick={clearTextHandler} >ClearText</button>
                            <button type="button" className="btn btn-primary mx-3" onClick={removeExtraSpace}>Remove Extra Space</button>
                    <div className ="container my-3">
                            <h1>Your Text Summary</h1>
                            <p>Numbers of Words:{text.split(" ").length} And Numbers of Character: {text.length}</p>
                            <p>You will read your text within {0.008 * text.split(" ").length } Minuts.</p>
                            <h2>Preview You Text </h2>
                            <p>{text}</p>
                    </div>
                </div>
                    
               </>
           )
       }
       