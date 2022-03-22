import Container from "react-bootstrap/Container";
import {useEffect, useState} from "react";
import {getProducts} from "../../helpers/getProducts";
import ItemList from "../../components/item-list/ItemList";
import {useParams} from "react-router-dom";

function ItemListContainer({title}) {
    const [ loading, setLoading ] = useState(true);
    const [products, setProds ] = useState([]);

    const { categoryId } = useParams();

    useEffect(()=> {
        if (categoryId) {
            getProducts
                .then(resp => setProds(resp.filter(x => x.category === categoryId)))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))
        } else {
            getProducts
                .then(resp => setProds(resp))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))
        }
    }, [categoryId]);



    return(
     <Container>
         <div className="row align-items-start m-3">
             <div className="col-12">
                 <h2 className="text-center">
                     <em>{title}</em>
                 </h2>
             </div>

         </div>
         <div className="row align-items-start m-3">
                 {       loading ? <h2 className="text-center">Loading...</h2>
                     :
                     <ItemList products={products} />
                 }
         </div>
     </Container>
 );
}

export default ItemListContainer;