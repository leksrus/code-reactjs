import Button from "react-bootstrap/Button";
import {useCartContext} from "../../context/CartContext";
import CartItem from "../cart-item/CartItem";
import {LinkContainer} from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";

function Cart() {
    const {cartList, clearCart, getTotalPrice} = useCartContext();
    const total = getTotalPrice();
    console.log(total)
    return (
        <div className="container">
            { cartList.length > 0 ?
                <>
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="d-flex flex-row-reverse">
                                <Button className="btn-lg" variant="danger" onClick={ clearCart }>Remove all items</Button>
                            </div>
                        </div>
                    </div>
                    <hr/>
                        {cartList.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}/> )}
                    <hr/>
                    <h4 className="text-end"><b>Total to pay: $ { total || 0.00 } </b></h4>
                    <div className="row mt-3">
                        <div className="col-12">
                            <div className="d-flex flex-row-reverse">
                                <Button className="btn-lg" variant="primary">Checkout</Button>
                            </div>
                        </div>
                    </div>
                </>
            :
                <div className="row justify-content-md-center">
                    <div className="col-12">
                        <h3 className="text-center mt-5">Cart is empty</h3>
                    </div >
                        <LinkContainer to="/category/all">
                            <Button className="btn-lg mt-5 col-5" variant="dark">Continue shopping</Button>
                        </LinkContainer>
                </div>
            }
        </div>

    );
}

export default Cart;