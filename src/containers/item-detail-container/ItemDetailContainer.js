import {useEffect, useState} from "react";
import {getProducts} from "../../helpers/getProducts";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import ItemDetail from "../../components/item-detail/ItemDetail";
import {useParams} from "react-router-dom";

export function ItemDetailContainer() {
    const [ loading, setLoading ] = useState(true);
    const [product, setProd ] = useState([]);

    const { productId } = useParams();

    useEffect(()=> {
        getProducts
            .then(resp => productId ? setProd(resp.find(x => x.id === parseInt(productId))) : setProd(resp))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false));
    }, [productId]);

    return(
        <Container>
                {       loading ?
                    <Spinner animation="border" role="status">
                       <span className="visually-hidden">Loading...</span>
                     </Spinner>
                    :
                    <ItemDetail product={product} />
                }
        </Container>
    );
}

export default ItemDetailContainer;
