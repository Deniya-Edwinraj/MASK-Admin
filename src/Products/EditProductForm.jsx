import { useEffect, useState } from "react";
import './Products.css';

const EditProductForm = (props) => {
  const initialProductState = {
    id: null,
    name: "",
    price: "",
  };

  const [product, setProduct] = useState(props.currentProduct || initialProductState);

  useEffect(() => {
    if (props.currentProduct && props.currentProduct.id) {
      setProduct(props.currentProduct);
    } else {
      setProduct(initialProductState);
    }
  }, [props.currentProduct]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!product.name || !product.price) return;
        props.updateProduct(product.id, product);
      }}
    >
      <label>Name</label>
      <input type="text" onChange={handleInputChange} name="name" value={product.name} />
      <label>Price</label>
      <input type="text" onChange={handleInputChange} name="price" value={product.price} />
      <button>Update product</button>
      <button className="button muted-button" onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditProductForm;
