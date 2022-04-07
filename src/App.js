import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./containers/item-list-container/ItemListContainer";
import ItemDetailContainer from "./containers/item-detail-container/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import SignIn from "./components/sign-in/SignIn";
import SignOut from "./components/sign-out/SignOut";
import CartContextProvider from "./context/CartContext";
import Footer from "./components/footer/Footer";
import CartItemContainer from "./containers/cart-item-container/CartItemContainer";

function App() {
  return (
      <BrowserRouter>
          <CartContextProvider>
            <div>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer title={ "Welcome to home page" } />}/>
                    <Route path="/category/:categoryId" element={<ItemListContainer title={ "Welcome to home page" } />}/>
                    <Route path="/category/all" element={<ItemListContainer title={ "Welcome to home page" } />}/>
                    <Route path='/item-detail/:productId' element={<ItemDetailContainer />}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/signin' element={<SignIn />}/>
                    <Route path='/signout' element={<SignOut />}/>
                    <Route path='/cart' element={<CartItemContainer />}/>
                    <Route path='/*' element={<Navigate to='/' />} />
                </Routes>
                <Footer/>
            </div>
          </CartContextProvider>
      </BrowserRouter>
  );
}

export default App;
