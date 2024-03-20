// import './Customize.css';

// const Customizetable = (props)=>(
//     <table>
//     <thead>
//       <tr>
//         <th>Product</th>
//         <th>Category</th>
//         <th>Size</th>
//         <th>Colour</th>
//         <th>Extra Features</th>
//       </tr>
//     </thead>
//     <tbody>
//         {props.customizes.length>0?(
//             props.customizes.map((customize)=>(
//                 <tr key={customize.id}>
//                         <td>{customize.product}</td>
//                         <td>{customize.category}</td>
//                         <td>{customize.size}</td>
//                         <td>{customize.colour}</td>
//                         <td>{customize.extra_features}</td>
//                         <td>
//                         <button onClick={()=>{
//                             props.editRow(customize)
//                         }} className="button muted-button">Edit</button>
//                         <button onClick={()=>props.deleteCustomize(customize.id)} className="button muted-button">Delete</button>
//                         </td>
//                     </tr>

//             ))
//             ):(
//                 <tr>
//                     <td colSpan={3}>No customization </td>
//                 </tr>
//             )
//         }

//     </tbody>
//   </table>
// );

// export default Customizetable;

import React, { useEffect, useState } from 'react';
import './Customize.css';

const Customizetable = (props) => {
  const [customizes, setCustomizes] = useState([]);

  useEffect(() => {
    const token = 'abc123';
  
    fetch('http://localhost:5000/api/customize/', {
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
      .then((data) => setCustomizes(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Category</th>
          <th>Size</th>
          <th>Colour</th>
          <th>Extra Features</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {customizes.length > 0 ? (
          customizes.map((customize) => (
            <tr key={customize._id}>
              <td>{customize.product}</td>
              <td>{customize.category}</td>
              <td>{customize.size}</td>
              <td>{customize.colour}</td>
              <td>{customize.extra_features}</td>
              <td>
                {/* <button
                  onClick={() => {
                    props.editRow(customize);
                  }}
                  className="button muted-button"
                >
                  Edit
                </button> <br/> */}
                {/* <button
                  onClick={() => props.deleteCustomize(customize._id)}
                  className="button muted-button"
                >
                  Delete
                </button> */}
                  <select className="browser-default custom-select">
                   <option>Status</option>
                   <option value="1" style={{color:"green"}}>Done</option>
                   <option value="2" style={{color:"orange"}}>On process</option>
                   <option value="3" style={{color:"red"}}>Rejected</option>
                  </select>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6}>No customization</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Customizetable;
