import ProductForm from './ProductForm';

function CreateProduct(props) {
  function addProductHandler(productData) {
    props.getProductHandler(productData);
  }
  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '10px 20px',
        borderRadius: '3px',
      }}
    >
      <ProductForm getProductHandler={addProductHandler} />
    </div>
  );
}
export default CreateProduct;
