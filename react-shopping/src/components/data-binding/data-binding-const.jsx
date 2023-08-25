import { useState } from "react";
export function DataBinding()
{
    const [userName, setUserName] = useState("John");

    function handleNameChange(event){
        setUserName(event.target.value);
    }
    return(
        <div className="container-fluid">
            <dl>
                <dt>User Name</dt>
                <dd>
                    <input type="text" onChange={handleNameChange}/>
                </dd>
            </dl>
            <p>Hello ! {userName}</p>
        </div>
    )

}