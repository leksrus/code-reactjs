import {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import ItemDetail from "../../components/item-detail/ItemDetail";
import {useParams} from "react-router-dom";
import {getFirestore, getDoc, doc} from "firebase/firestore/lite";
import {getFirestoreApp} from "../../firebase/firebase-config";
import Row from "react-bootstrap/Row";



export function ItemDetailContainer() {
    const [ loading, setLoading ] = useState(true);
    const [product, setProd ] = useState({});

    const { productId } = useParams();

    useEffect(()=> {
        const db = getFirestore(getFirestoreApp());
        const productQuery = doc(db, 'products', productId);

        getDoc(productQuery).then((productSnapshot) => {
            setProd(Object.assign({documentId: productSnapshot.id}, productSnapshot.data()));
        })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false));
    }, [productId]);

    return(
        <Container>
                {       loading ?
                            <Row className="m-3 justify-content-md-center">
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </Row>
                    :
                    <ItemDetail product={product} />
                }
        </Container>
    );
}

export default ItemDetailContainer;
