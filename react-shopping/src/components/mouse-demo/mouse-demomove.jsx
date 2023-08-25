import { useState} from "react";
import "./mouse-demo.css";

export function MouseDemoFlag(){

    const [styleObject, setStyleObject] = useState({'position':'', 'top':'','left':''});
    
    function handleMouseMove(e) {
        setStyleObject({
            'position': 'fixed',
            'left': e.clientX + 'px',
            'top':  e.clientY + 'px'
        })
    }
    
    return(
        <div onMouseMove={handleMouseMove}>
            <div style={{height:'1000px'}}>
                <p>move your mouse pointer to test.</p>
                <br />
                X = {styleObject.left} Y = {styleObject.top}
            </div>
            <img src="images/Flag_of_India.gif" style={styleObject} width="50" height="50"/>
        </div>
    )
}

