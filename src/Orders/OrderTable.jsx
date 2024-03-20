// import './Order.css';
// import React, { useEffect, useState } from 'react';

// const OrderTable = (props) => {
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         const token = 'abc123';

//         fetch('http://localhost:5000/api/order/orders', {
//             headers: new Headers({
//                 Authorization: `Bearer ${token}`,
//             }),
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then((data) => setOrders(data))
//         .catch((error) => console.error('Error fetching data:', error));
//     }, []);

//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>Order Items</th>
//                     <th>Total Price</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Phone Number</th>
//                     <th>Address</th>
//                     <th>District</th>
//                     <th>Actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {props.orders.length > 0 ? (
//                     props.orders.map((order) => (
//                         <tr key={order.id}>
//                             <td>{order.orderItems}</td>
//                             <td>{order.totalprice}</td>
//                             <td>{order.name}</td>
//                             <td>{order.email}</td>
//                             <td>{order.phoneNo}</td>
//                             <td>{order.address}</td>
//                             <td>{order.district}</td>
//                             <td>
//                                 <select className="browser-default custom-select">
//                                     <option>Status</option>
//                                     <option value="1">Done</option>
//                                     <option value="2">On process</option>
//                                     <option value="3">Rejected</option>
//                                 </select>
//                             </td>
//                         </tr>
//                     ))
//                 ) : (
//                     <tr>
//                         <td colSpan={10}>No orders</td>
//                     </tr>
//                 )}
//             </tbody>
//         </table>
//     );
// };

// export default OrderTable;

import React, { useEffect, useState } from 'react';
import './Order.css';

const OrderTable = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = 'abc123';

    fetch('http://localhost:5000/api/order/orders', {
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Received data:', data);
      setOrders(data.orders);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      // Handle the error, e.g., setOrders([]) or display an error message
    });
  }, []);

  return (
    <table className="order-table">
      <thead>
        <tr>
          <th>Order Items</th>
          <th>Total Price</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>District</th>
          <th>Payment Method</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.length > 0 ? (
          orders.map((order) => (
            <tr key={order._id}>
              {/* <td>
                {order.order_items && order.order_items.map((item, index) => (
                  <div key={index}>{order.orderItems}</div>
                ))}
              </td> */}
              <td>{order.orderItems}</td>
              <td>{order.totalprice}</td>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.phoneNo}</td>
              <td>{order.address}</td>
              <td>{order.district}</td>
              <td>{order.paymentMethod}</td>

              <td>
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
            <td colSpan={8}>No orders</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default OrderTable;


