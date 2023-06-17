import './app.css';
import ProductList from './Components/ProductList/ProductList';
import CreateProduct from './Components/CreateProduct/CreateProduct';

function App() {
  return (
    <div className='container'>
      <CreateProduct />
      <ProductList />
    </div>
  );
}
export default App;
