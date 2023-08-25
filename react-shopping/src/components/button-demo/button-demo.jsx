import { useEffect, useState } from "react";
export function ButtonDemo()
{
    const [status, setStatus] = useState(1);
    const [textContainer, setTextContainer] = useState({display:'none'});
    const [imgContainer, setImgContainer] = useState({display:'none'});
    const [progressValue, setProgressValue] = useState(1);


    var count = 1;
    var min, max,  value = 1;
    function Loading(){
        count++;
        setStatus(count);
        if(count==100){
            setImgContainer({display:'block'});
            setTextContainer({display:'none'});
        }else{
            count++;
            setProgressValue(count);
            setStatus(count);
        }
    }


function handleLoadClick(){
    setTextContainer({
      display:'block'  
    })
    setInterval(Loading, 200);
}

    useEffect(()=>{
    
    },[]);
    
    return(
        <div className="container-fluid">
            <button className="btn mt-2 btn-primary" onClick={handleLoadClick}>Load Image</button>
            <div className="d-flex justify-content-center align-items-center" style={{height:'500px'}}>
                <div className="text-center" style={textContainer}>
                    <progress min="1" max="100" value={progressValue}></progress>

                        <div className="spinner-border"></div>
                        <p>{status} %</p>
                        <p>Loading</p>
                </div>
                <div style={imgContainer}>
                    <img src="images/phone1.jpeg" width="300" height="300" alt="" />
                </div>
            </div>
        </div>
    )
}