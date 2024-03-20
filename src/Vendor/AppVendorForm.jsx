// import { useState } from "react";
// import './Vendor.css';
// import { Link } from "react-router-dom";

//  const AddVendorForm = (props)=>{
//     const initialFormState = {
//         id:null,
//         name:'',
//         email:'',
//         phoneNumber:'',
//         address:''
//     }
//     const [vendor,setVendor] =  useState(initialFormState);

//     const handleInputChange = (event)=>{
//        const {name,value} = event.target
   

//        setVendor({...vendor,[name]:value})
//     }
//     return (
//     <form onSubmit={
//         event => {
//             event.preventDefault();
//             if(!vendor.name||!vendor.vendorname) return;
//             props.addVendor(vendor);
//             setVendor(initialFormState);
//         }
//     }>
    //     <h1>Add Vendor</h1>
    //     <label>Vendor Name</label>
    //     <input type="text" onChange={handleInputChange} name="name" value={vendor.name} />
    //     <label>Email</label>
    //     <input type="email" onChange={handleInputChange} name="email" value={vendor.email} />
    //     <label>Phone Number</label>
    //     <input type="text" onChange={handleInputChange} name="phoneNumber" value={vendor.phoneNumber} />
    //     <label>Address</label>
    //     <input type="text" onChange={handleInputChange} name="address" value={vendor.address} /><br/>
    //     <Link to='/vendors'>
    //     <button>Add new vendor</button>
    //     </Link>
    //   </form>
//     )
//  }

// export default AddVendorForm;

import React, { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";


function AddVendorForm() {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://localhost:5000/api/vendor/new', formData, {withCredentials:true});
          console.log('Message send successfully:', response.data);
          toast.success('Vendor created succssfully');
          navigate('/vendors');
      
          setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            address: '',
          });
        } catch (error) {
          console.error('Error submitting request:', error.message);
          toast.error('Invalid process');
        }


      };
      const handleClear = () => {
        setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            address: '',
        });
      }

   return (
      <form onSubmit={handleSubmit}>
        <h1>Add Vendor</h1>
        <label>Vendor Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label>Phone Number</label>
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        <label>Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} /><br/>
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add new vendor'}
        </button> 
        <button className="button muted-button" style={{ marginLeft:'287px' }}>
        <Link to='/vendors' style={{ textDecoration: 'none', color: '#818181' }}>Cancel</Link>
        </button>
      </form>
   );
}

export default AddVendorForm;