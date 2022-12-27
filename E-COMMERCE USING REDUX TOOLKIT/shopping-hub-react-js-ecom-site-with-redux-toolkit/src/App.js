import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
// import {Home, Category, Cart} from "./pages/index";
//componenets
// import Navbar from "./components/Navbar/Navbar"

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from './pages/HomePage/HomePage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import CartPage from './pages/CartPage/CartPage';


function App(){

  return(
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element = {<HomePage/>}/>
    <Route path="/category/:id" element = {<CategoryPage/>}/>
    <Route path="/cart" element = {<CartPage/>} />
    </Routes>
    <footer/>
    </BrowserRouter>
    </div>
  );

}

export default App;