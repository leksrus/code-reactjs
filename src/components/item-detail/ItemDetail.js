import ItemCount from "../item-count/ItemCount";
import "./ItemDetail.css"
import ItemCheckout from "../item-checkout/ItemCheckout";
import {useState} from "react";
import {useCartContext} from "../../context/CartContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


function ItemDetail({product}) {
    const [isCheckout, setCheckout] = useState(false);
    const {addToCart} = useCartContext();

    console.log(product)

    const onAdd = (counter) => {
        if(product.stock >= counter){
            addToCart(product, counter);
            setCheckout(true);
        }
    };
    return (
        <Row className="mt-2">
            <Col>
                <Card>
                    <Row>
                        <Col lg={4} md={4} sm={4}>
                            <Card.Img  className="image-detail-350 m-3" variant="bottom" src={product.imgSrc} alt={product.name} />
                        </Col>
                        <Col lg={8} md={8} sm={8}>
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-center mt-3 mb-3">
                                    <Card.Title as={"h5"}><b>{product.name}</b></Card.Title>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mt-3 mb-3">
                                    <Card.Subtitle className="mb-2 text-muted"> $ {product.price}</Card.Subtitle>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mt-3 mb-3">
                                    {product.description}
                                </div>
                                <div className="d-flex text-muted align-items-center justify-content-center mt-3 mb-3">
                                    Stock: {product.stock}
                                </div>
                                { isCheckout ? <ItemCheckout/> : <ItemCount stock = {product.stock} onAdd = { onAdd } />}
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

export default ItemDetail;
