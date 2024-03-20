import { useState } from "react";
import Customizetable from "./CustomizeTable"
import EditCustomizeForm from './EditCustomizeForm';
import './Customize.css';


function Customizes() {

const customizeData = [ ];

const deleteCustomize = (id)=>{
    setCustomizes(customizes.filter((customize)=>customize.id!==id))
    setEditing(false);
}

    const [customizes,setCustomizes] = useState(customizeData);
    const [editing,setEditing] = useState(false)


    const initialFormState = {id:null,name:'',username:''}

    const [currentCustomize,setCurrentCustomize] = useState(initialFormState);

    const editRow = (customize)=>{
        setEditing(true);
        setCurrentCustomize({id:customize.id,name:customize.name,username:customize.username});
    }

    const updateCustomize = (id,updatedCustomize)=>{
        setEditing(false);
        setCustomizes(customizes.map((customize)=>(customize.id===id?updatedCustomize:customize)))
    }

  return (
    <div className="container">
      <h1>Customization Details of MASK</h1>
      <div className="flex-row">
        <div className="flex-large">
            {editing?(<div>
                <h2>Edit Customization</h2>
                <EditCustomizeForm 
                    setEditing={setEditing}
                    currentCustomize={currentCustomize}
                    updateCustomize={updateCustomize}
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
          <Customizetable editRow={editRow} deleteCustomize={deleteCustomize} customizes={customizes} />
        </div>
      </div>
    </div>
  );
}

export default Customizes;