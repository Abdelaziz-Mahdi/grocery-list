let productCount = 0;


let style = {
  padding: "0px 10px",
  fontSize: "20px",
};


function displayProductCount() {
  return productCount > 0 ? productCount : "Zero";
}

function Products(props) {
  let badgeClass = 'badge-margin-left-240 badge ';
  badgeClass += props.isAvailable ? 'bg-success' : 'bg-danger';
  return (
    <ul className='list-group shadow'>
      <li className='list-group-item'>
        <div className='d-flex media align-items-lg-center flex-column flex-lg-row p-3'>
          <div className='media-body order-2 order-lg-1'>
            <h5 className='mt-0 font-weight-bold mb-2'>{props.name}</h5>
            <p className='font-italic text-muted mb-0 small'>{props.description}</p>
            <div className='d-flex align-items-center justify-content-between mt-1'>
              <h6 className='font-weight-bold my-2' style={ { 'marginRight': "30px"} }>{props.price}</h6>
              <button className='btn btn-primary'>-</button>
              <span style={style}>{displayProductCount()}</span>
              <button className='btn btn-primary'>+</button>
              <span className={badgeClass}>{props.isAvailable? 'Available' : 'Unavailable'}</span>
            </div>
          </div>
          <img
            src={props.imageUrl}
            alt='Generic placeholder'
            width='200'
            className='ml-lg-5 order-1 order-lg-2'
          />
        </div>
      </li>
    </ul>
  );
}
export default Products;
