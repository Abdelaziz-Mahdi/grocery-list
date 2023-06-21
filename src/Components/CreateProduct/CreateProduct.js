import React, {useState} from 'react';
import ProductForm from './ProductForm';

function CreateProduct(props) {
  let [showForm, setShowForm] = useState(false);
  function addProductHandler(productData) {
    props.getProductHandler(productData);
  }

  function onCreateNewProduct() {
    setShowForm(true);
  }

  function onProductSubmittedOrCancel() {
    setShowForm(false);
  }

  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '10px 20px',
        borderRadius: '3px',
      }}
    >
      {!showForm && <button className="btn btn-primary" onClick={onCreateNewProduct}>Create Product</button>}
      {showForm && <ProductForm getProductHandler={addProductHandler} onCancel={onProductSubmittedOrCancel} />}
    </div>
  );
}
export default CreateProduct;
