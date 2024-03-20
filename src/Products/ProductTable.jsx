import './Products.css';
import React, { useEffect, useState , Component} from 'react';
import { Link } from 'react-router-dom';

const ProductTable = () => {
  const [products, setBookings] = useState([]);

  useEffect(() => {
    const token = 'abc123';

    fetch('http://localhost:5000/api/product', {
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setBookings(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
    <table>
    <thead>
      <tr>
            <th>Product Name</th>
            <th>Price</th>
            {/* <th>Description</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>District</th>
            <th>Delivery At</th>
            <th>Delivery Charge</th> */}
            <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {products.length>0?(
            products.map((product)=>(
                <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>
                          <button onClick={() => this.props.editRow(product)} className="button muted-button">Edit</button>
                          <button onClick={() => this.props.deleteProduct(product._id)} className="button muted-button">Delete</button> 
                        </td>
                    </tr>
            ))
            ):(
                <tr>
                    <td colSpan={10}>No products</td>
                </tr>
            )
        }

    </tbody>
  </table>
  <br />
        <Link to='/add-product'>
          <button>Add Product</button>
        </Link>
  </div>
  );
};

export default ProductTable;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const ProductTable = ({ editRow, deleteProduct }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const token = 'abc123';

//     fetch('http://localhost:5000/api/product', {
//       headers: new Headers({
//         Authorization: `Bearer ${token}`,
//       }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => setProducts(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Product Name</th>
//             <th>Image</th>
//             <th>Price</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.length > 0 ? (
//             products.map((product) => (
              
//                 <tr key={product._id}>
//                 <td>{product.name}</td>
//                 <td>{product.image}</td>
//                 <td>{product.price}</td>
//                 <td>
//                   <button onClick={() => editRow(product)} className="button muted-button">
//                     Edit
//                   </button>
//                   <button onClick={() => deleteProduct(product._id)} className="button muted-button">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={3}>No products</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       <br />
//       <Link to='/add-product'>
//         <button>Add Product</button>
//       </Link>
//     </div>
//   );
// };

// export default ProductTable;


