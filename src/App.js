import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./containers/item-list-container/ItemListContainer";
import ItemDetailContainer from "./containers/item-detail-container/ItemDetailContainer";

function App() {
  return (
    <div>
        <NavBar/>
        <ItemListContainer title={ "Welcome to home page" } />
        <ItemDetailContainer/>
    </div>
  );
}

export default App;
