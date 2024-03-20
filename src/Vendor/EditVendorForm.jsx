// import { useEffect, useState } from "react";

// const EditVendorForm = (props) => {
//   const [vendor, setVendor] = useState(props.currentVendor);

//   useEffect(() => {
//     setVendor(props.currentVendor);
//   }, [props.currentVendor]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;

//     setVendor({ ...vendor, [name]: value });
//   };

//   return (
//     <form
//       onSubmit={(event) => {
//         event.preventDefault();
//         if (!vendor.name || !vendor.email || !vendor.phoneNumber || !vendor.address) return;
//         props.updateVendor(vendor.id, vendor);
//       }}
//     >
//       <label>Name</label>
//       <input type="text" onChange={handleInputChange} name="name" value={vendor.name} />
//       <label>Email</label>
//       <input type="email" onChange={handleInputChange} name="email" value={vendor.email} />
//       <label>Phone Number</label>
//       <input type="text" onChange={handleInputChange} name="phoneNumber" value={vendor.phoneNumber} />
//       <label>Address</label>
//       <input type="text" onChange={handleInputChange} name="address" value={vendor.address} />
//       <button>Update vendor</button>
//       <button className="button muted-button" onClick={() => props.setEditing(false)}>
//         Cancel
//       </button>
//     </form>
//   );
// };

// export default EditVendorForm;

import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const EditVendorForm = (props) => {
  const [vendor, setVendor] = useState(props.currentVendor);
  const navigate = useNavigate();

  useEffect(() => {
    setVendor(props.currentVendor);
  }, [props.currentVendor]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setVendor({ ...vendor, [name]: value });
  };

  const handleUpdateVendor = async (event) => {
    event.preventDefault();

    if (!vendor.name || !vendor.email || !vendor.phoneNumber || !vendor.address) return;

    try {
      // Assume you have an updateVendor function that handles the API call to update the vendor
      await props.updateVendor(vendor.id, vendor);
      toast.success('Vendor updated successfully');
      navigate('/vendors');
    } catch (error) {
      console.error('Error updating vendor:', error);
      toast.error('Error updating vendor');
    }
  };

  return (
    <form onSubmit={handleUpdateVendor}>
      <label>Name</label>
      <input type="text" onChange={handleInputChange} name="name" value={vendor.name} />
      <label>Email</label>
      <input type="email" onChange={handleInputChange} name="email" value={vendor.email} />
      <label>Phone Number</label>
      <input type="text" onChange={handleInputChange} name="phoneNumber" value={vendor.phoneNumber} />
      <label>Address</label>
      <input type="text" onChange={handleInputChange} name="address" value={vendor.address} />
      <button>Update vendor</button>
      <button className="button muted-button" onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditVendorForm;
