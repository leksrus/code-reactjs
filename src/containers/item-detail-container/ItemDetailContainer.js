import {useEffect, useState} from "react";
import {getProducts} from "../../helpers/getProducts";
import Container from "react-bootstrap/Container";
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
                {       loading ? <h2 className="text-center">Loading...</h2>
                    :
                    <ItemDetail product={product} />
                }
        </Container>
    );
}

export default ItemDetailContainer;