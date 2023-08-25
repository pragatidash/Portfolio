import { Button } from "bootstrap"


export function EventBinding()
{
    function InsertClick(e){
        document.write(`
            Button Id   : ${e.target.Id} <br>
            Button Name : ${e.target.name} <br>
            Button Value: ${e.target.value} <br>
            X Position  : ${e.clientX} <br>
            Ctrl Key    : ${e.ctrlKey}
        `);
    }

    return(
        <div className="container-fluid">
            <h2>Events</h2>
            <button id="btnInsert" onClick={InsertClick} name="InsertButton" value="Insert">Insert</button>
        </div>
    )
} 