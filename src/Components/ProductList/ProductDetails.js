import Button from './Button';
import { useState } from 'react';

function ProductDetails(props) {
  let [productCount, updateCount] = useState(0);
  function displayProductCount() {
    return productCount > 0 ? productCount : 'Zero';
  }

  let badgeClass = 'badge-margin-left-240 badge ';
  badgeClass += props.isAvailable ? 'bg-success' : 'bg-danger';
  let increaseCount = () => {
    updateCount(++productCount);
  };
  let decreaseCount = () => {
    if (productCount > 0) {
      updateCount(--productCount);
    }
  };
  return (
    <div className='d-flex align-items-center justify-content-between mt-1'>
      <h6 className='font-weight-bold my-2' style={{ marginRight: '30px' }}>
        {props.price}
      </h6>
      <Button eventHandler={decreaseCount}>-</Button>
      <span style={{ padding: '8px 14px', fontSize: '13px' }}>
        {displayProductCount()}
      </span>
      <Button eventHandler={increaseCount}>+</Button>
      <span className={badgeClass}>
        {props.isAvailable ? 'Available' : 'Unavailable'}
      </span>
    </div>
  );
}

export default ProductDetails;
