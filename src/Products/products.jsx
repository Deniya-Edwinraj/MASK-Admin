import { useState } from "react";
import ProductTable from "./ProductTable";
import EditProductForm from "./EditProductForm";
import './Products.css';
import { toast } from 'react-toastify';

function Products() {
  const usersData = [
    // {id:1,name:'Logesh',username:'jvlogesh'},
    // {id:2,name:'Ramesh',username:'rameshtr'},
    // {id:3,name:'Daniel',username:'danielradcliff'},
  ];

  const addProduct = (product) => {
    product.id = products.length + 1;
    setProducts([...products, product]);
  }

  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/product/${id}`, {
        method: 'DELETE',
      });

      console.log('Product deleted:', id);

      // Update the state to remove the deleted product from the table
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
      setEditing(false);
      toast.success('Product deleted successfully');
      console.log('Products after deletion:', products);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const [products, setProducts] = useState(usersData);
  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: '', price: '' };
  const [currentProduct, setCurrentProduct] = useState(initialFormState);

  const editRow = (product) => {
    setEditing(true);
    setCurrentProduct({ id: product.id, name: product.name, price: product.price });
  }

  const updateProduct = (id, updatedProduct) => {
    setEditing(false);
    setProducts(products.map((product) => (product.id === id ? updatedProduct : product)));
  }

  return (
    <div className="container">
      <h1>Products Details of MASK</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit Product</h2>
              <EditProductForm
                setEditing={setEditing}
                setCurrentProduct={setCurrentProduct}
                updateProduct={updateProduct}
              />
            </div>
          ) : (
            <div>
              {/* <h2>Add Vendor</h2>
              <AddProductForm addProduct={addProduct} /> */}
            </div>
          )}
        </div>
        <div className="flex-large">
          {/* <h2>View Products</h2> */}
          <ProductTable editRow={editRow} deleteProduct={deleteProduct} products={products} />
        </div>
      </div>
    </div>
  );
}

export default Products;
