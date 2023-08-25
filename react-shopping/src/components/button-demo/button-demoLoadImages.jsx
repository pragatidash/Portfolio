import { useEffect, useState } from "react";


export function ButtonDemoLoadImages()
{
    const [images, setImages] = useState(["images/phone1.jpeg", "images/phone2.jpeg", "images/phone3.jpeg", "images/phone4.jpeg", "images/phone5.jpeg"]);
    const [image, setImage] = useState('');

    var count = 0;
    function LoadImages(){

        count++;
        if(count==images.length) {
            count = 0;
        }else {
            setImage(images[count]);
        }
    }

    useEffect(()=>{
        setInterval(LoadImages,1000);
    },[]);

    
    return(
        <div className="container-fluid">
            <h2>Realme Mobile</h2>
            <img width="200" height="300" src={image} />
        </div>
    )
    
}