import React, { useState } from 'react';
import './app.css';
import ProductList from './Components/ProductList/ProductList';
import CreateProduct from './Components/CreateProduct/CreateProduct';
import FilterProduct from './Components/FilterProduct/FilterProduct';

let products = [
  {
    pID: 1,
    pName: 'Fresh Milk',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: true,
    image: require('./images/fresh-milk.png'),
    price: '$12',
  },
  {
    pID: 2,
    pName: 'Cottage Cheese',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: false,
    image: require('./images/cottage-cheese.png'),
    price: '$10',
  },
  {
    pID: 3,
    pName: 'Brocoli',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: true,
    image: require('./images/brocoli.png'),
    price: '$15',
  },
  {
    pID: 4,
    pName: 'Oranges',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: true,
    image: require('./images/oranges.png'),
    price: '$20',
  },
  {
    pID: 5,
    pName: 'Olive oil',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: false,
    image: require('./images/olive-oil.png'),
    price: '$14',
  },
];

function App() {
  let [newProductsArr, setProductsArr] = useState(products);
  function addProductHandler(productData) {
    productData.pID = newProductsArr.length + 1;
    setProductsArr([productData, ...newProductsArr]);
  }

  let [filterValue, setFilterValue] = useState('all');

  let filteredProducts = newProductsArr.filter((product) => {
    if (filterValue === 'available') {
      return product.isAvailable===true;
    } else if (filterValue === 'unavailable') {
      return product.isAvailable===false;
    } else {
      return product;
    }
  });
  function filterProductHandler(filterValue) {
    setFilterValue(filterValue);    
  }
  return (
    <div className='row'>
      <div className='col-lg-8 mx-auto'>
        <CreateProduct getProductHandler={addProductHandler} />
        <FilterProduct filterProductHandler={filterProductHandler} />
        <ProductList setProductHandler={filteredProducts} />
      </div>
    </div>
  );
}
export default App;
