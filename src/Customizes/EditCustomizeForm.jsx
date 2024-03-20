import { useEffect, useState } from "react"

const EditCustomizeForm = (props)=>{
   const [customize,setCustomize] = useState(props.currentCustomize)

   useEffect(()=>{
        setCustomize(props.currentCustomize)
   },[props])

   const handleInputChange = (event)=>{
    const {name,value} = event.target

    setCustomize({...customize,[name]:value})
    }

    return (
        <form onSubmit={
            event => {
                event.preventDefault();
                if(!customize.name||!customize.username) return;
                props.updateCustomize(customize.id,customize);
            }
        }>
            <label>Name</label>
            <input type="text" onChange={handleInputChange} name="name" value={customize.name} />
            <label>Username</label>
            <input type="text" onChange={handleInputChange} name="username" value={customize.username} />
            <button>Update customize</button>
            <button className="button muted-button" onClick={()=>{
                props.setEditing(false)
            }}>Cancel</button>
          </form>
    )
}

export default EditCustomizeForm;