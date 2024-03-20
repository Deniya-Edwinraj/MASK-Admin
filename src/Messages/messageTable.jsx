import './message.css';
import React, { useEffect, useState } from 'react';

// ... (your imports)

const MessageTable = () => {
  const [customizes, setCustomizes] = useState([]);

  useEffect(() => {
    const token = 'abc123';

    fetch('http://localhost:5000/api/contact/', {
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
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Message</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customizes.length > 0 ? (
          customizes.map((customize, index) => (
            <tr key={customize.id || index}>
              <td>{customize.name}</td>
              <td>{customize.email}</td>
              <td>{customize.phoneNumber}</td>
              <td>{customize.message}</td>
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
            <td colSpan={5}>No messages</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default MessageTable;
