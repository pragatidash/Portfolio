import { useState} from "react";
import "./mouse-demo.css";

export function MouseDemo(){

    const [photos] = useState(["images/phone1.jpeg","images/phone2.jpeg","images/phone3.jpeg","images/phone4.jpeg","images/phone5.jpeg"]);
    const [preview, setPreview] = useState("");

    function HandleMouseOver(e){
        setPreview(e.target.src);
    }

    return(
        <div className="container-fluid">
            <section className="row mt-2" >
                <nav className="col-2">
                    {
                        photos.map(photo=>
                            <div className="mb-2 p-1 border border-2 border-primary" style={{width:'200px'}} key={photo}>
                                <img src={photo} onMouseOver={HandleMouseOver} width="150" height="150" />

                            </div>
                            )
                    }

                </nav>
                <main className="col-10">
                    <img width="500"className="preview-image" height="500" src={preview}/>

                </main>
            </section>

        </div>
    )
}