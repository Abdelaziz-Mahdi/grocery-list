import Products from './Products';



function ProductList(props) {
  return (
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
  );
}
export default ProductList;
