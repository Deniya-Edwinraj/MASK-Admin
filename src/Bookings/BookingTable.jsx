// import './Booking.css';

// const BookingTable = (props)=>(
//     <table>
//     <thead>
//       <tr>
//             <th>Function Type</th>
//             <th>Theme</th>
//             <th>Description</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Address</th>
//             <th>District</th>
//             <th>Delivery At</th>
//             <th>Delivery Charge</th>
//             <th>Actions</th>
//       </tr>
//     </thead>
//     <tbody>
//         {props.bookings.length>0?(
//             props.bookings.map((booking)=>(
//                 <tr key={booking.id}>
//                         <td>{booking.name}</td>
//                         <td>{booking.username}</td>
//                         <td>
//                         <button onClick={()=>{
//                             props.editRow(booking)
//                         }} className="button muted-button">Edit</button>
//                         <button onClick={()=>props.deleteUser(booking.id)} className="button muted-button">Delete</button>
//                         </td>
//                     </tr>

//             ))
//             ):(
//                 <tr>
//                     <td colSpan={10}>No bookings</td>
//                 </tr>
//             )
//         }

//     </tbody>
//   </table>
// );

// export default BookingTable;

import './Booking.css'; 
import React, { useEffect, useState } from 'react';

const BookingTable = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = 'abc123';

    fetch('http://localhost:5000/api/booking/bookings', {
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
    <table>
    <thead>
      <tr>
            <th>Function Type</th>
            <th>Theme</th>
            <th>Description</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>District</th>
            <th>Phone-No</th>
            <th>Delivery At</th>
            <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {bookings.length>0?(
            bookings.map((booking)=>(
                <tr key={booking.id}>
                        <td>{booking. function_type}</td>
                        <td>{booking.theme}</td>
                        <td>{booking.description}</td>
                        <td>{booking.name}</td>
                        <td>{booking.email}</td>
                        <td>{booking.address}</td>
                        <td>{booking.district}</td>
                        <td>{booking.phoneNo}</td>
                        <td>{booking.date_of_delivery}</td>
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
            ):(
                <tr>
                    <td colSpan={10}>No bookings</td>
                </tr>
            )
        }

    </tbody>
  </table>
  );
};

export default BookingTable;