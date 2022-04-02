import './Contact.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Contact() {
    return (
        <div className="form-contact m-3">
            <Container>
                <Row className={"justify-content-end"}>
                    <Col lg={4} md={6} sm={12}>
                        <Form className="form-input g-3 p-5">
                            <Form.Group className="m-3">
                                <Form.Label>First name:</Form.Label>
                                <Form.Control type="text" placeholder="write your firstname" name="fname" required />
                            </Form.Group>
                            <Form.Group className="m-3">
                                <Form.Label>Last name:</Form.Label>
                                <Form.Control type="text" placeholder="write your lastname" name="lname" required />
                            </Form.Group>
                            <Form.Group className="m-3">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" placeholder="write your email" name="lemail" required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="m-3">
                                <Form.Label>Message:</Form.Label>
                                <Form.Control type="textarea" placeholder="lmessage" name="lmessage" cols="40" rows="5" required />
                            </Form.Group>
                            <Button className="btn-custom mt-5" type={"submit"}>
                                Submit message
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Contact;