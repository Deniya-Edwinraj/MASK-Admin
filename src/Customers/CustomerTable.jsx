// import './customers.css';
// import React, { useEffect, useState } from 'react';

// // ... (other imports and styles)

// const CustomerTable = () => {
//   const [customers, setCustomers] = useState([]);

//   const handleDisableUser = (userId) => {
//     console.log('userId:', userId);
//     const token = 'abc123';

//     fetch(`http://localhost:5000/api/users/${userId}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data.message); // Log the success message
//       })
//       .catch((error) => console.error('Error blocking user:', error));
//   };

//   useEffect(() => {
//     const token = 'abc123';

//     fetch('http://localhost:5000/api/users/all-users', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => setCustomers(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {customers.length > 0 ? (
//           customers.map((customer) => (
//             <tr key={customer._id || customer.id || customer.userId}>
//               {/* Adjust the property names based on your backend response */}
//               <td>{customer.name}</td>
//               <td>{customer.email}</td>
//               <td>
//                 <button
//                   className="button muted-button"
//                   onClick={() => handleDisableUser(customer._id || customer.id || customer.userId)}
//                 >
//                   Disable
//                 </button>
//               </td>
//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan={3}>No users</td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   );
// };

// export default CustomerTable;

import './customers.css';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);

  const handleDisableUser = (userId) => {
    console.log('userId:', userId);
    const token = 'abc123';

    fetch(`http://localhost:5000/api/users/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message); // Log the success message
        toast.success('User disabled successfully');
        // Refresh the user list after disabling
        fetchUserList();
      })
      .catch((error) => {
        console.error('Error blocking user:', error);
        toast.error('Error disabling user');
      });
  };

  const fetchUserList = () => {
    const token = 'abc123';

    fetch('http://localhost:5000/api/users/all-users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setCustomers(data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchUserList();
  }, []);


  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.length > 0 ? (
          customers.map((customer) => (
            <tr key={customer._id || customer.id || customer.userId}>
              {/* Adjust the property names based on your backend response */}
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>
                <button
                  className="button muted-button"
                  onClick={() => handleDisableUser(customer._id || customer.id || customer.userId)}
                >
                  Disable
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CustomerTable;

