import { useState } from "react";
import CategoryTable from "./categoryTable";
// import EditOrderForm from "./EditOrderForm";
import './category.css';


function Categories() {

const usersData = [
    {id:1,name:'Wedding',username:'2'},
    {id:2,name:'Birthday Party',username:'3'},
    {id:3,name:'Reuion',username:'4'},
    {id:3,name:'Family Get Together',username:'5'},
    {id:3,name:'Other',username:'6'},
];

const addUser = (user)=>{
    user.id = users.length + 1;
    setUsers([...users,user])
}
const deleteUser = (id)=>{
    setUsers(users.filter((user)=>user.id!==id))
    setEditing(false);
}

    const [users,setUsers] = useState(usersData);
    const [editing,setEditing] = useState(false)


    const initialFormState = {id:null,name:'',username:''}

    const [currentUser,setCurrentUser] = useState(initialFormState);

    const editRow = (user)=>{
        setEditing(true);
        setCurrentUser({id:user.id,name:user.name,username:user.username});
    }

    const updateUser = (id,updatedUser)=>{
        setEditing(false);
        setUsers(users.map((user)=>(user.id===id?updatedUser:user)))
    }

  return (
    <div className="container">
      <h1>Category Details of MASK</h1>
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
          <CategoryTable editRow={editRow} deleteUser={deleteUser} users={users} />
        </div>
      </div>
    </div>
  );
}

export default Categories;