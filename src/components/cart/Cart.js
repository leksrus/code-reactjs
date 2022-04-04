import Button from "react-bootstrap/Button";
import {useCartContext} from "../../context/CartContext";
import CartItem from "../cart-item/CartItem";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Cart() {
    const {cartList, clearCart, getTotalPrice} = useCartContext();
    const total = getTotalPrice();

    return (
        <Container>
            { cartList.length > 0 ?
                <>
                    <Row className="mt-5">
                        <Col lg={12} md={12} sm={12}>
                            <div className="d-flex flex-row-reverse">
                                <Button className="btn-lg" variant="danger" onClick={ clearCart }>Remove all items</Button>
                            </div>
                        </Col>
                    </Row>
                    <hr/>
                    {cartList.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}/> )}
                    <hr/>
                    <h4 className="text-end"><b>Total to pay: $ { total || 0.00 } </b></h4>
                    <Row className="mt-3">
                        <Col lg={12} md={12} sm={12}>
                            <div className="d-flex flex-row-reverse">
                                <Button className="btn-lg" variant="primary">Checkout</Button>
                            </div>
                        </Col>
                    </Row>
                </>
                :
                <Row className="justify-content-md-center">
                    <Col lg={12} md={12} sm={12}>
                        <h3 className="text-center mt-5">Cart is empty</h3>
                    </Col>
                    <LinkContainer to="/category/all">
                        <Button className="btn-lg mt-5 col-5" variant="dark">Continue shopping</Button>
                    </LinkContainer>
                </Row>
            }
        </Container>
    );
}

export default Cart;