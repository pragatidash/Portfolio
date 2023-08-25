import React from "react";

export class LoginClassComponent extends React.Component
{
    constructor(){
        super();
        this.state = {
            Name : '',
            Price : 0,
            City: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
    }
        handleNameChange(e){
            this.setState({
                Name : e.target.value,
                Price: this.state.Price,
                City: this.state.City
            })
        }
        handlePriceChange(e){
            this.setState({
                Name : this.state.Name,
                Price: e.target.value,
                City: this.state.City
            })
        }
        handleCityChange(e){
            this.setState({
                Name : this.state.Name,
                Price: this.state.Price,
                City: e.target.value
            })
        }
        handleRegisterClick(e){
            alert(JSON.stringify(this.state));
        }

        render(){
            return(
                <React.Fragment>
                    <div className="container-fluid">
                        <div className="mb-2 mt-2">
                        <dl>
                            <dt>Name</dt>
                            <dd><input type="text" onChange={this.handleNameChange}/></dd>
                            <dt>Price</dt>
                            <dd><input type="number" onChange={this.handlePriceChange}/></dd>
                            <dt>City</dt>
                            <dd>
                                <select onChange={this.handleCityChange}>
                                    <option>Delhi</option>
                                    <option>Hyderabad</option>
                                </select>
                            </dd>
                            <button onClick={this.handleRegisterClick.bind(this)}>Register</button>
                        </dl>
                        </div>
                        <div>
                            <h2>Details</h2>
                            <dl>
                                <dt>Name</dt>
                                <dd>{this.state.Name}</dd>
                                <dt>Price</dt>
                                <dd>{this.state.Price}</dd>
                                <dt>City</dt>
                                <dd>{this.state.City}</dd>
                            </dl>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
    


