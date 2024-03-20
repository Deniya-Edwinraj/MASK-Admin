import { useState } from "react";
import OrderTable from "./OrderTable"
// import EditOrderForm from "./EditOrderForm";
import './Order.css';


function Orders() {

const ordersData = [
    // {id:1,name:'Logesh',username:'jvlogesh'},
    // {id:2,name:'Ramesh',username:'rameshtr'},
    // {id:3,name:'Daniel',username:'danielradcliff'},
];

const addOrder = (order)=>{
    order.id = orders.length + 1;
    setOrders([...orders,order])
}
const deleteOrder = (id)=>{
    setOrders(orders.filter((order)=>order.id!==id))
    setEditing(false);
}

    const [orders,setOrders] = useState(ordersData);
    const [editing,setEditing] = useState(false)


    const initialFormState = {id:null,name:'',username:''}

    const [currentOrder,setCurrentOrder] = useState(initialFormState);

    const editRow = (order)=>{
        setEditing(true);
        setCurrentOrder({id:order.id,name:order.name,username:order.username});
    }

    const updateOrder = (id,updatedOrder)=>{
        setEditing(false);
        setOrders(orders.map((order)=>(order.id===id?updatedOrder:order)))
    }

  return (
    <div className="container">
      <h1>Order Details of MASK</h1>
      <div className="flex-row">
        <div className="flex-large">
            {editing?(<div>
                <h2>Edit User</h2>
                {/* <EditOrderForm 
                    setEditing={setEditing}
                    currentOrder={currentOrder}
                    updateOrder={updateOrder}
                /> */}
            </div>):(<div>
                {/* <h2>Add Vendor</h2>
          <AddVendorForm addUser={addUser} /> */}
          </div>
            ) 
        }
        </div>
        <div className="flex-large">
          {/* <h2>View Orders</h2> */}
          <OrderTable editRow={editRow}  orders={orders} />
        </div>
      </div>
    </div>
  );
}

export default Orders;