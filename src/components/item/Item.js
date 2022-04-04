import './Item.css'
import Col from "react-bootstrap/Col";
import {Card} from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";

function Item({product}) {
    return   (
        <Col lg={4} md={6} sm={12}>
            <LinkContainer to={`/item-detail/${product.documentId}`}>
                <Card className={"mb-5 transition"}>
                    <div className="d-flex align-items-center justify-content-center">
                        <Card.Img className="image-min-height-315" variant="top" src={product.imgSrc} alt={product.name} />
                    </div>
                    <Card.Body>
                        <Card.Title as={"h5"}><b>{product.name}</b></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"> $ {product.price}</Card.Subtitle>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </LinkContainer>
        </Col>
    );
}

export default Item;