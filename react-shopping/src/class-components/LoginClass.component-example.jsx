import React from "react";

export class LoginClassComponent extends React.Component
{
    constructor(){
        super();
        this.state = {
            msg : ""
        }
        //this.handleLoginClick = this.handleLoginClick.bind(this);
    }
        handleLoginClick(e){
            this.setState({
                //msg : "Login Clicked",
                msg : `Button Id : ${e.target.id}`
            })
            //alert("Login Clicked");
        }
        render(){
            return(
                <React.Fragment>
                    <div className="container-fluid">
                        <div className="mb-2 mt-2">
                        <button onClick={this.handleLoginClick.bind(this)} id="btnLogin" name="Login">Login</button>
                        </div>
                        <p>{this.state.msg}</p>
                    </div>
                </React.Fragment>
            )
        }
    }
    


