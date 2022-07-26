
import './App.css';
import Header from './components/Header';
import AddProduct from './pages/AddProduct';
import Product from './pages/Product';
import Index from './pages/Index';
import {BrowserRouter,Routes,Route,} from "react-router-dom";


if(localStorage.getItem('product') === null){
  localStorage.setItem("product",JSON.stringify([]))
}
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header />
       <Routes>
         <Route path='/' element={<Index />}/>
         <Route path='/addproducts' element={<AddProduct />}/>
         <Route path='/products' element={<Product />}/>
       </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
