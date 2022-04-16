import Button from "react-bootstrap/Button";
import "./CartItem.css"
import {useCartContext} from "../../../context/CartContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function CartItem({cartItem}) {
    const {removeProductFromCart, addToCart, removeAllProductQuantity} = useCartContext();

    return (
        <Row className="align-items-start">
            <Col lg={12} md={12} sm={12}>
                <Card border="light" className="mb-3">
                    <Row>
                        <Col lg={3} md={3} sm={3}>
                            <div className="d-flex align-items-center justify-content-center">
                                <Card.Img  className="image-size-160" variant="bottom" src={cartItem.imgSrc} alt={cartItem.name} />
                            </div>
                        </Col>
                        <Col lg={9} md={9} sm={9}>
                            <Card.Body>
                                <Row>
                                    <Col lg={4} md={4} sm={4}>
                                        <Card.Title as="h5"><b>{cartItem.name}</b></Card.Title>
                                        <Card.Text>
                                            {cartItem.description}
                                        </Card.Text>
                                        <Card.Subtitle className="mb-3 text-muted"> $ {cartItem.price}</Card.Subtitle>
                                        <Card.Text className="text-muted">
                                            Total item: $ {(cartItem.price * cartItem.quantity).toFixed(2)}
                                        </Card.Text>
                                    </Col>
                                    <Col lg={3} md={3} sm={3}>
                                        <div className="d-flex align-items-center justify-content-center mt-5 mb-5">
                                            <div className="btn-cart noselect" onClick={ () => addToCart(cartItem, 1)}>+</div>
                                            <div className="count">{cartItem.quantity}</div>
                                            <div className="btn-cart noselect" onClick={() => removeProductFromCart(cartItem)}>-</div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={3} sm={3}>
                                        <div className="d-flex justify-content-end mt-5 mb-5">
                                            <Button variant="outline-danger" onClick={ () => removeAllProductQuantity(cartItem) }>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                    <path
                                                        d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                                </svg>
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    );
}

export default CartItem;