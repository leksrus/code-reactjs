import {useEffect, useState} from "react";
import {getProducts} from "../../helpers/getProducts";
import Container from "react-bootstrap/Container";
import ItemDetail from "../../components/item-detail/ItemDetail";

export function ItemDetailContainer() {
    const [ loading, setLoading ] = useState(true);
    const [product, setProd ] = useState([]);

    useEffect(()=> {
        getProducts
            .then(resp => setProd(resp.find(x => x.id === 4)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))

    }, [])

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