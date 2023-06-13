import './app.css';
import Products from './Components/Products';

let products = [
  {
      pID: 1, 
      pName: 'Fresh Milk', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: require('./images/fresh-milk.png'),
      price: '$12'
  },
  {
      pID: 2, 
      pName: 'Cottage Cheese', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: false,
      image: require("./images/cottage-cheese.png"),
      price: '$10'
  },
  {
      pID: 3, 
      pName: 'Brocoli', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: require("./images/brocoli.png"),
      price: '$15'
  },
  {
      pID: 4, 
      pName: 'Oranges', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: require("./images/oranges.png"),
      price: '$20'
  },
  {
      pID: 5, 
      pName: 'Olive oil', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: false,
      image: require("./images/olive-oil.png"),
      price: '$14'
  }
]

function App() {
  return (
    <div className='row'>
      <div className='col-lg-8 mx-auto'>
        <Products
          id={products[0].pID}
          name={products[0].pName}
          description={products[0].desc}
          isAvailable={products[0].isAvailable}
          imageUrl={products[0].image}
          price={products[0].price} />
        <Products
          id={products[1].pID}
          name={products[1].pName}
          description={products[1].desc}
          isAvailable={products[1].isAvailable}
          imageUrl={products[1].image}
          price={products[1].price} />
          <Products
          id={products[2].pID}
          name={products[2].pName}
          description={products[2].desc}
          isAvailable={products[2].isAvailable}
          imageUrl={products[2].image}
          price={products[2].price} />
          <Products
          id={products[3].pID}
          name={products[3].pName}
          description={products[3].desc}
          isAvailable={products[3].isAvailable}
          imageUrl={products[3].image}
          price={products[3].price} />
          <Products
          id={products[4].pID}
          name={products[4].pName}
          description={products[4].desc}
          isAvailable={products[4].isAvailable}
          imageUrl={products[4].image}
          price={products[4].price} />
      </div>
    </div>
  );
}
export default App;
