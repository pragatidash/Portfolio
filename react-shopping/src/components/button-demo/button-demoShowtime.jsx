import { useEffect, useState } from "react";


export function ButtonDemoShowTime()
{
    const [msg, setMsg] = useState('');

    function ShowTime(){
        var now = new Date();
        setMsg(now.toLocaleTimeString());
    }
    useEffect(()=>{
        setInterval(ShowTime,1000);
       
    },[]);

    
    return(
        <div className="container-fluid">
            <h1 className="text-center text-primary">{msg}</h1>
        </div>
    )
    
}