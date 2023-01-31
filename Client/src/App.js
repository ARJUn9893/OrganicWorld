
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Product from './Product';
import Farmfull from './Farmfull';
import Checkout from './Checkout';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import Notfound from './Notfound';
import Productcart from './Productcart';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Cart" element={<Productcart />}></Route>
          <Route exact path="/product" element={<Product />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/ourfarm" element={<Farmfull />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
