import {Navbar,Footer} from './components';
import Home from './Pages/home';
import ProductDetail from './Pages/productDetail';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route
          path='/'
          element={<Home/>}>
          </Route>

          <Route
          path='/product-detail'
          element={<ProductDetail/>}>
          </Route>

        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;