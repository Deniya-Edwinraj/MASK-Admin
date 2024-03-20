import { useState } from "react";
import BookingTable from "./BookingTable"
import EditBookingForm from "./EditBookingForm";
import './Booking.css';


function Vendors() {

const usersData = [
    // {id:1,name:'Logesh',username:'jvlogesh'},
    // {id:2,name:'Ramesh',username:'rameshtr'},
    // {id:3,name:'Daniel',username:'danielradcliff'},
];

const addUser = (booking)=>{
    booking.id = bookings.length + 1;
    setBooking([...bookings,booking])
}
const deleteUser = (id)=>{
    setBooking(bookings.filter((booking)=>booking.id!==id))
    setEditing(false);
}

    const [bookings,setBooking] = useState(usersData);
    const [editing,setEditing] = useState(false)


    const initialFormState = {id:null,name:'',username:''}

    const [currentUser,setCurrentUser] = useState(initialFormState);

    const editRow = (booking)=>{
        setEditing(true);
        setCurrentUser({id:booking.id,name:booking.name,username:booking.username});
    }

    const updateUser = (id,updatedUser)=>{
        setEditing(false);
        setBooking(bookings.map((booking)=>(booking.id===id?updatedUser:booking)))
    }

  return (
    <div className="container">
      <h1>Booking Details of MASK</h1>
      <div className="flex-row">
        <div className="flex-large">
            {editing?(<div>
                <h2>Edit User</h2>
                <EditBookingForm 
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
                />
            </div>):(<div>
                {/* <h2>Add Vendor</h2>
          <AddVendorForm addUser={addUser} /> */}
          </div>
            ) 
        }
        </div>
        <div className="flex-large">
          {/* <h2>View Vendors</h2> */}
          <BookingTable editRow={editRow} deleteUser={deleteUser} bookings={bookings} />
        </div>
      </div>
    </div>
  );
}

export default Vendors;