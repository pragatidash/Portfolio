import { useEffect, useState } from "react";
import "./nasa.component.css";

export function NasaComponentTable()
{
    const [mars, setMars] = useState({photos:[]});

    // function handleFetchClick(){
    //     fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    //     .then(response=> response.json())
    //     .then(data=>{
    //         setMars(data);
    //     })

    
    useEffect(()=>{
            fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
            .then(response=> response.json())
            .then(data=>{
                setMars(data);
            })

    },[])

    return(
        <div className="container-fluid">
            <h2>
                Mars Rover Photos
                {/* <button onClick={handleFetchClick} className="btn btn-primary">Fetch</button> */}
            </h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Preview</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mars.photos.map(item=>
                            <tr ley={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    <img width="200" height="200" src={item.img_src} alt="" />
                                </td>
                                <td>
                                    {item.camera.full_name}
                                </td>
                                <td>
                                    {item.rover.name}
                                </td>
                            </tr>
                            )
                    }

                </tbody>
            </table>
        </div>
    )
}

