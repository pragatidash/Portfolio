import { useState} from "react";
import "./mouse-demo.css";

export function MouseDemoCopy(){

    const [photos] = useState(["images/phone1.jpeg","images/phone2.jpeg","images/phone3.jpeg","images/phone4.jpeg","images/phone5.jpeg"]);
    
    function handleMouseOver(e){
        // for(var property in e.target)
        // {
        //     console.log(property);
        // }
        e.currentTarget.stop();
    }
    function handleMouseOut(e){
        e.currentTarget.start();
    }

    return(
        <div className="container-fluid">
            <div className="mt-4">
                <marquee scrollamount="15" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {
                    photos.map(photo=>
                        <img width="250" key={photo} className="me-2" height="250" src={photo}/>)
                }
                </marquee>
            </div>
        </div>
    )
}