
//Data binding array of objects
export function DataBinding()
{
    var data = [
        {Name:  "Samsung TV", Price: 45000.44, Stock: true},
        {Name: "Nike Casuals", Price: 6000.55, Stock: true},
        {Name: "Watch", Price: 3400.33, Stock: false}
    ]
    return(
        <div className="container-fluid">
            <h2>Products Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item)=>
                        <tr key={item.Name}>
                            <td>{item.Name}</td>
                            <td>{item.Price}</td>
                            <td>{(item.Stock==true)?"Available":"Out of Stock"}</td>
                            <td>
                                <button className="btn btn-danger">
                                    <span className="bi bi-trash-fill"></span>
                                </button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )

}