import React, {useState} from 'react';

function ProductForm (){
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
        setProductImage(event.target.files[0]);
        // updatUserInput({
        //     ...userInput,
        //     productImage: event.target.files[0]
        // });
    }

    return(
        <form className="row g-3">
        <div className="col-md-6">
            <label for="name">Product Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Product Name"
                    onChange={nameInputHandler} />
        </div>
        <div className="col-md-6">
            <label for="price">Product Price</label>
            <input type="number" 
                    min="0.01" step="0.01" 
                    className="form-control" 
                    id="price" 
                    placeholder="Product Price"
                    onChange={priceInputHandler} />
        </div>

        <div className="form-group">
            <label for="description">Product Description</label>
            <input type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Product Description"
                    onChange={descriptionInputHandler} />
        </div>

        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="isAvailable"
            onChange={isAvailableInputHandler} />
            <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
        </div>

        <div className="form-group">
            <label for="select-image">Select product image</label>
            <input type="file" className="form-control" id="select-image"
            onChange={imageInputHandler} />
        </div>
        

        <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
    )
}
export default ProductForm;