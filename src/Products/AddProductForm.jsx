import React, { useState } from "react";
import './Products.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function AddProductForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      name: '',
      price: '',
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
          const response = await axios.post('http://localhost:5000/api/product', formData, {withCredentials:true});
          console.log('Message send successfully:', response.data);
          toast.success('Product created succssfully');
          navigate('/products');
          setFormData({
            name: '',
            price: '',
          });
        } catch (error) {
          console.error('Error submitting request:', error.message);
          toast.error('Invalid process');
        }
      };
      const handleClear = () => {
        setFormData({
            name: '',
            price: '',
        });
      }

   return (
      <form onSubmit={handleSubmit}>
        <h1>Add Product</h1>
        <label>Product Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Price</label>
        <input type="text" name="price" value={formData.price} onChange={handleChange} /><br/>
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add new product'}
        </button> 
        <button className="button muted-button" style={{ marginLeft:'280px' }}>
        <Link to='/products' style={{ textDecoration: 'none', color: '#818181' }}>Cancel</Link>
        </button>
      </form>
   );
}

export default AddProductForm;




// import React, { useState } from "react";
// import './Products.css';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
// import FileBase64 from 'react-file-base64';

// function AddProductForm() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     price: '',
//     image: null,
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (name === "image") {
//       const file = files[0];
//       const reader = new FileReader();
      
//       reader.readAsDataURL(file);
      
//       reader.onload = () => {
//         setFormData((prevData) => ({
//           ...prevData,
//           image: reader.result,
//         }));
//       };

//       reader.onerror = () => {
//         console.error("Error reading the file");
//       };
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       setLoading(true);
  
//       const formDataToSend = new FormData();
//       formDataToSend.append('name', formData.name);
//       formDataToSend.append('price', formData.price);
//       formDataToSend.append('image', formData.image);
  
//       const productResponse = await axios.post('http://localhost:5000/api/product', formDataToSend, { withCredentials: true });
  
//       console.log('Message send successfully:', productResponse.data);
//       toast.success('Product created successfully');
//       navigate('/products');
//       setFormData({
//         name: '',
//         price: '',
//         image: null,
//       });
//     } catch (error) {
//       console.error('Error submitting request:', error.message);
//       toast.error('Invalid process');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleClear = () => {
//     setFormData({
//       name: '',
//       price: '',
//       image: null,
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Add Product</h1>
//       <label>Product Name</label>
//       <input type="text" name="name" value={formData.name} onChange={handleChange} />
//       <label>Price</label>
//       <input type="text" name="price" value={formData.price} onChange={handleChange} />
//       <label>Image</label>
//       <FileBase64
//         type="file"
//         multiple={false}
//         onDone={({ base64 }) => {
//           setFormData((prevData) => ({
//             ...prevData,
//             image: base64,
//           }));
//         }}
//       />
// {formData.image && typeof formData.image === 'string' && <img src={formData.image} alt="Product" />}      <button type="submit" disabled={loading}>
//         {loading ? 'Adding...' : 'Add new product'}
//       </button>
//       <button className="button muted-button" style={{ marginLeft: '280px' }} onClick={handleClear}>
//         Cancel
//       </button>
//     </form>
//   );
// }

// export default AddProductForm;
