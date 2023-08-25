
export function DataBinding()
{
    //Data binding examplen with primitive type
    // var id = 1;
    // var name = "Samsung TV";
    // var price = 45000.44;
    // var stock = true;
    
    // return(
    //     <div className="container-fluid">
    //         <h2>Product Details</h2>
    //         <dl>
    //             <dt>Product Id</dt>
    //             <dd>{id}</dd>
    //             <dt>Name</dt>
    //             <dd>{name}</dd>
    //             <dt>Price</dt>
    //             <dd>{price}</dd>
    //             <dt>Stock</dt>
    //             <dd>{(stock==true)?"Available":"Out of Stock"}</dd>
    //         </dl>
    //     </div>
    // )

    //object type data binding
//     var product = {
//         "id" : 1,
//         "Name" : "Samsung LED TV",
//         "Price" : 145000.44,
//         "Stock" : true,
//     }

// return(
//     <div className="container-fluid">
//         <h2>Product Details</h2>
//         <dl>
//             <dt>Product Id</dt>
//             <dd>{product.id}</dd>
//             <dt>Name</dt>
//             <dd>{product.Name}</dd>
//             <dt>Price</dt>
//             <dd>{product.Price}</dd>
//             <dt>Stock</dt>
//             <dd>{(product.Stock==true)?"Available":"Out of Stock"}</dd>
//         </dl>
//     </div>
//     )

var Categories = ["Electronics", "Footware","Fashion"];
return(
<div className="container-fluid">
    <h2>Categories</h2>
    <ul className="list-unstyled">
        {
            Categories.map((category)=>
            <li key={category}><a href="#">{category}</a></li>)
        }
    </ul>
    <div>
        {
             Categories.map((category)=>
             <button key={category} className="btn btn-danger mb-2 d-block w-25">{category}</button>
             )           
        }
    </div>
    <ul className="list-unstyled">
        {
            Categories.map((category)=>
            <li key={category}><input type="checkbox" />{category}</li>
            )
        }
    </ul>
    <ol>
        {
            Categories.map((category)=>
            <li key={category}>{category}</li>
            )
        }
    </ol>
    <select>
        {
            Categories.map((category)=>
            <option key={category}>{category}</option>
            )     
        }
    </select>

<table className="table table-hover">
    <thead>
        <tr>
            <th>
                Categories
            </th>
        </tr>
    </thead>
    <tbody>
        {
            Categories.map((category)=>
            <tr key={category}>
                <td>{category}</td>
            </tr>
            )
        }
    </tbody>
</table>

</div>

)

}