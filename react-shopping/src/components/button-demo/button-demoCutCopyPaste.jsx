import { useState } from "react";


export function ButtonDemoCutCopyPaste()
{
    const [msg, setMsg] = useState('');

    function OpenWindow(){
        window.open("images/phone1.jpeg","Mobile","width=400 height=400");
    }
    function handleCut(){
        setMsg('Removed - copied to clipboard');
    }
    function handlecopy(){
        setMsg('Copied to Clipboard');
    }
    function handlePaste(){
        setMsg('Inserted from Clipboard');
    }
    return(
        <div className="container-fluid">
            <h2>Double Click</h2>
            <img onDoubleClick={OpenWindow} src="images/phone1.jpeg" width="100" height="100" />
            <br /> <br />
            <textarea rows="4" cols="40" onCut={handleCut} onCopy={handlecopy} onPaste={handlePaste}>

            </textarea>
            <p>{msg}</p>
        </div>
    )
    
}