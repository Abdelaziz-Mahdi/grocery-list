import React, {useState} from 'react';

function ProductForm (props){
    let[productName, setProductName] = useState("");
    let[productPrice, setProductPrice] = useState(0);
    let[productDescription, setProductDescription] = useState("");
    let[isAvailable, setIsAvailable] = useState(false);
    let[productImage, setProductImage] = useState("");
    // let[userInput, updatUserInput] = useState({
    //     productName: "",
    //     productPrice: 0,
    //     productDescription: "",
    //     isAvailable: false,
    //     productImage: ""
    // });

    function nameInputHandler(event){
        setProductName(event.target.value);
        // updatUserInput({
        //     ...userInput,
        //     productName: event.target.value
        // });
        // updatUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         productName: event.target.value
        //     }
        // }
        // );
    }

    function priceInputHandler(event){
        setProductPrice(event.target.value);
        // updatUserInput({
        //     ...userInput,
        //     productPrice: event.target.value
        // });
    }

    function descriptionInputHandler(event){
        setProductDescription(event.target.value);
        // updatUserInput({
        //     ...userInput,
        //     productDescription: event.target.value
        // });
    }
    
    function isAvailableInputHandler(event){
        setIsAvailable(event.target.checked);
        // updatUserInput({
        //     ...userInput,
        //     isAvailable: event.target.checked
        // });
    }

    function imageInputHandler(event){
        setProductImage(event.target.value);
        // updatUserInput({
        //     ...userInput,
        //     productImage: event.target.value
        // });
    }

    function createProductEventHundler(event){
        event.preventDefault();
        let productData = {
            pName: productName,
            desc: productDescription,
            isAvailable: isAvailable,
            image: productImage,
            price: '$'+Number(productPrice),
        }
        setProductName("");
        setProductPrice(0);
        setProductDescription("");
        setIsAvailable(false);
        setProductImage("");
        props.getProductHandler(productData);
        props.onCancel();
    }

    return(
        <form className="row g-3" onSubmit={createProductEventHundler}>
        <div className="col-md-6">
            <label for="name">Product Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Product Name"
                    value={productName}
                    onChange={nameInputHandler} />
        </div>
        <div className="col-md-6">
            <label for="price">Product Price</label>
            <input type="number" 
                    min="0.01" step="0.01" 
                    className="form-control" 
                    id="price" 
                    placeholder="Product Price"
                    value={productPrice}
                    onChange={priceInputHandler} />
        </div>

        <div className="form-group">
            <label for="description">Product Description</label>
            <input type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Product Description"
                    value={productDescription}
                    onChange={descriptionInputHandler} />
        </div>

        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="isAvailable"
            checked={isAvailable} onChange={isAvailableInputHandler} />
            <label className="form-check-label" for="isAvailable">Is product available in stock?</label>
        </div>

        <div className="form-group">
            <label for="select-image">Select product image</label>
            <input type="file" className="form-control" id="select-image"
            value={productImage} onChange={imageInputHandler} />
        </div>
        

        <button type="submit" className="btn btn-primary">Add Product</button>
        <button type="button" className="btn btn-danger" onClick={props.onCancel}>Cancel</button>
    </form>
    )
}
export default ProductForm;