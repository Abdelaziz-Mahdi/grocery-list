function Products() {
  return (
    <ul class='list-group shadow'>
      <li class='list-group-item'>
        <div class='media align-items-lg-center flex-column flex-lg-row p-3'>
          <div class='media-body order-2 order-lg-1'>
            <h5 class='mt-0 font-weight-bold mb-2'>Fresh Milk</h5>
            <p class='font-italic text-muted mb-0 small'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              fuga autem maiores necessitatibus.
            </p>
            <div class='d-flex align-items-center justify-content-between mt-1'>
              <h6 class='font-weight-bold my-2'>$120.00</h6>
            </div>
          </div>
          <img
            src=''
            alt='Generic placeholder'
            width='200'
            class='ml-lg-5 order-1 order-lg-2'
          />
        </div>
      </li>
    </ul>
  );
}
export default Products;
