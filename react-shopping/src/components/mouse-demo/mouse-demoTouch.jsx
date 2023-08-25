import { useState} from "react";
import "./mouse-demo.css";

export function MouseDemoTouch(){
    const [styleObj, setStyleObj] = useState({'position':'', 'top':'','left':''});

    function handleTouch(e){
        // for(var property in e)
        //  {
        //      console.log(property);
        //  }
        setStyleObj({
            'position': 'fixed',
            'left': e.touches[0].clientX + 'px',
            'top':  e.touches[0].clientY + 'px'
        })
    }

    return(
        <div className="container-fluid">
            <img src="images/phone1.jpeg" style={styleObj} onTouchMove={handleTouch} width="100" height="100" />
        </div>
    )
}