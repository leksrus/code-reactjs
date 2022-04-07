import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Alert} from "react-bootstrap";


function Order({orderId}) {
    return (
        <Container>
            <Row className={ "m-5" }>
                <Alert variant="success">
                    <h5 className={"text-center"}>You order number is '{orderId}'. Thanks for buying.</h5>
                </Alert>
            </Row>
        </Container>
    );
}

export default Order;