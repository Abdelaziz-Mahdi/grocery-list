import ProductDetails from "./ProductDetails";

function Products(props) {

  return (
      <li className='list-group-item'>
        <div className='d-flex media align-items-lg-center flex-column flex-lg-row p-3'>
          <div className='media-body order-2 order-lg-1'>
            <h5 className='mt-0 font-weight-bold mb-2'>{props.name}</h5>
            <p className='font-italic text-muted mb-0 small'>{props.description}</p>
          </div>

          <img
            src={props.imageUrl}
            alt='Generic placeholder'
            width='200'
            className='ml-lg-5 order-1 order-lg-2'
          />

        </div>
        <ProductDetails price={props.price} isAvailable={props.isAvailable} />
      </li>
  );
}
export default Products;
