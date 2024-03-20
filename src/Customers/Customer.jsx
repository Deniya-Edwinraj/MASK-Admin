import { useState } from "react";
import CustomerTable from "./CustomerTable";
// import EditOrderForm from "./EditOrderForm";
import './customers.css';


function Customers() {

const messageData = [
    // {id:1,name:'Logesh',username:'jvlogesh'},
    // {id:2,name:'Ramesh',username:'rameshtr'},
    // {id:3,name:'Daniel',username:'danielradcliff'},
];

const addUser = (message)=>{
    message.id = messages.length + 1;
    SetMessage([...messages,message])
}
const deleteUser = (id)=>{
    SetMessage(messages.filter((message)=>message.id!==id))
    setEditing(false);
}

    const [messages,SetMessage] = useState(messageData);
    const [editing,setEditing] = useState(false)


    const initialFormState = {id:null,name:'',email:''}

    const [currentUser,setCurrentUser] = useState(initialFormState);

    const editRow = (message)=>{
        setEditing(true);
        setCurrentUser({id:message.id,name:message.name,username:message.username});
    }

    const updateUser = (id,updatedUser)=>{
        setEditing(false);
        SetMessage(messages.map((message)=>(message.id===id?updatedUser:message)))
    }

  return (
    <div className="container">
      <h1>Users of MASK</h1>
      <div className="flex-row">
        <div className="flex-large">
            {editing?(<div>
                <h2>Edit User</h2>
                <EditOrderForm 
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
          {/* <h2>View Orders</h2> */}
          <CustomerTable editRow={editRow} deleteUser={deleteUser} messages={messages} />
        </div>
      </div>
    </div>
  );
}

export default Customers;