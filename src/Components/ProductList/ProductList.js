import Products from './Products';



function ProductList(props) {
  return (
    <div className='row'>
      <div className='col-lg-8 mx-auto'>
        <ul className='list-group shadow'>
          {props.setProductHandler.map((product) =>{return (<Products
              key={product.pID}
              id={product.pID}
              name={product.pName}
              description={product.desc}
              isAvailable={product.isAvailable}
              imageUrl={product.image}
              price={product.price}
            />);})}
        </ul>
      </div>
    </div>
  );
}
export default ProductList;
