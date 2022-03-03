import Nav from "react-bootstrap/Nav";


function CartWidget() {
    return (
        <Nav.Link href="#cart" className="btn btn-outline-warning me-5 position-relative">
            <img className="img-cart" src="/images/shopping-cart.png" alt="Cart"/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
        </Nav.Link>
    );
}

export default CartWidget;