import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./containers/ItemListContainer";

function App() {
  return (
    <div>
        <NavBar/>
        <ItemListContainer title={ "Welcome to home page" } />
    </div>
  );
}

export default App;
