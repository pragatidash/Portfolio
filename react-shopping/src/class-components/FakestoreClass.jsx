import React from "react";

export class FakestoreClass extends React.Component
{
    constructor(){
        super();
        this.state= {
            products : []
        }
    // fetch("http://fakestoreapi.com/products")
    // .then(res => res.json())
    // .then(data => {
    //     this.setState({
    //         products : data})
    //     })
    }
    componentDidMount(){
        fetch("http://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            this.setState({
                products : data})
            })
    }
    render(){
        return(
            <div className="container-fluid">
                <h2>Fakestore Products</h2>
                <ol>
                    {
                        this.state.products.map(product =>
                        <li key={product.id}>{product.title}</li>
                            )
                    }
                </ol>
            </div>
        )
    }
}