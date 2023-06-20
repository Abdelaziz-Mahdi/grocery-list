import ProductForm from "./ProductForm"

function CreateProduct(props){
    function addProductHandler(productData){
        props.getProductHandler(productData);
    }
    return(
        <div className="row">
            <div className="col-lg-8 mx-auto" style={{backgroundColor: 'white', padding: '10px 20px', marginBottom: '25px' }}>
                <ProductForm getProductHandler={addProductHandler}/>
                </div>                    
        </div>
    )
}
export default CreateProduct;