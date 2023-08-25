import { useState } from "react"

export function KeyDemo()
{
    const [country, setCountry] = useState('');
    const [tip, setTip] = useState('');
    const [mobile, setMobile] = useState('');
    const [regExp, setRegExp] = useState(/ /);
    const [mobileError, setMobileError] = useState('');

    function handleCountryChange(e){
        setCountry(e.target.value);
        switch(e.target.value){
            case "India":
            setTip('+91 10 digits number');
            setRegExp(/\+91\d{10}/);
            break;
            case "US":
            setTip('+(1)(20)(460) 345 3210');
            setRegExp(/\+\(1\)\(\d{2}\)\(\d{3}\)\s\d{3}\s\d{4}/);
            break;
            case "UK":
            setTip('+(44)(230) 4670 3450');
            setRegExp(/\+\(44\)\(\d{3}\)\s\d{4}\s\d{4}/);
            break;
        }
    }

    function handleMobileChange(e){
        setMobile(e.target.value);
    }

    function handleSubmitClick(){
        if(mobile.match(regExp)){
            document.write("<h2>Verified Successfully..<h2>");
        } else {
            setMobileError(`Invalid Mobile - ${tip}`);
        }
    }

    return(
        <div className="container-fluid">
            <h3>REGISTER USER</h3>
            <dl>
               <dt>Your Country</dt>
               <dd>
                    <select onChange={handleCountryChange}>
                        <option>Select Country</option>                       
                        <option>India</option>
                        <option>US</option>
                        <option>UK</option>                    
                    </select>
               </dd>
               <dt>Mobile</dt>
               <dd>
                <input type="text"  onChange={handleMobileChange} placeholder={tip}/>
               </dd>
               <dd className="text-danger">{mobileError}</dd>
               <dd>
                <button onClick={handleSubmitClick} className="btn btn-primary">Submit</button>
               </dd>
            </dl>
        </div>
    )
}