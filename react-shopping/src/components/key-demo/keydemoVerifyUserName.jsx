import { useState } from "react"

export function KeyDemoVerifyUserName()
{
    const [users] = useState([{"UserName":"john"},{"UserName":"john12"},{"UserName":"david"}]);
    const [userError, setUserError] = useState('');
    const [errorClass, setErrorClass] = useState('');
    const [passwordWarning, setPassWarning] = useState({'display':'none'});

    function VerifyUserName(e) {
        for(var user of users) {
            if(user.UserName==e.target.value) {
                setUserError('User Name Taken - try Another');
                setErrorClass('text-danger');
                break;
            }else {
                setUserError('User Name Availble');
                setErrorClass('text-success');
            }
        }
    }
    function VerifyPassword(e){
        console.log(`
            Key Code : ${e.keyCode} \n
            Char Code : ${e.charCode} \n
            which : ${e.which}
        `);
        if(e.which>=65 && e.which<=90){
            setPassWarning({'display':'block'});
        }else{
            setPassWarning({'display':'none'});
        }
    }
    return(
        <div className="container-fluid">
            <h3>REGISTER USER</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onKeyUp={VerifyUserName} /></dd>
                <dd className={errorClass}>{userError}</dd>
                <dt>Password</dt>
                <dd><input type="password" onKeyPress={VerifyPassword}/></dd>
                <dd className="text-warning" style={passwordWarning}>
                    <span className="bi bi-exclamation-triangle"></span> Warning : Caps ON
                </dd>
            </dl>
        </div>
    )
}

