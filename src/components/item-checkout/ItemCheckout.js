import {LinkContainer} from "react-router-bootstrap";
import Button from "react-bootstrap/Button";


function ItemCheckout() {
    return (
        <div className="d-flex justify-content-center mt-5">
            <LinkContainer to="/cart">
                <Button className="me-3" variant="primary">To cart</Button>
            </LinkContainer>
            <LinkContainer to="/">
                <Button className="me-3" variant="dark">Continue shopping</Button>
            </LinkContainer>
        </div>
    )
}

export default ItemCheckout;