import Container from "react-bootstrap/Container";
import {useEffect, useState} from "react";
import {getProducts} from "../../helpers/getProducts";
import ItemList from "../../components/item-list/ItemList";
import {useParams} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ItemListContainer({title}) {
    const [ loading, setLoading ] = useState(true);
    const [ products, setProds ] = useState([]);

    const { categoryId } = useParams();

    useEffect(()=> {
        getProducts
            .then(resp => categoryId ? setProds(resp.filter(x => x.category === categoryId)) : setProds(resp))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false));
    }, [categoryId]);



    return(
     <Container>
         <Row className="m-3">
             <Col md={12} lg={12} sm={12}>
                 <h2 className="text-center">
                     <em>{title}</em>
                 </h2>
             </Col>
         </Row>
         {       loading ?
                     <Row className="m-3 justify-content-md-center">
                         <Spinner animation="border" role="status">
                             <span className="visually-hidden">Loading...</span>
                         </Spinner>
                     </Row>
             :
             <Row className="m-3">
                 <ItemList products={products} />
             </Row>

         }
     </Container>
 );
}

export default ItemListContainer;