import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./containers/item-list-container/ItemListContainer";
import ItemDetailContainer from "./containers/item-detail-container/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <div>
            {/*<NavBar/>*/}
            <Routes>
                <Route path='/' element={<ItemListContainer title={ "Welcome to home page" } />}/>
                <Route path='/details/:productId' element={<ItemDetailContainer />}/>
                {/*<Route path='/cart' element={<Cart />}/>*/}
                <Route path='/*' element={<Navigate to='/' />} />

            </Routes>

             {/*<ItemListContainer title={ "Welcome to home page" } />*/}
             {/*<ItemDetailContainer/>*/}
        </div>
      </BrowserRouter>
  );
}

export default App;
