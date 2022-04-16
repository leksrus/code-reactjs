import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import {useState} from "react";
import Alert from "react-bootstrap/Alert";


function SignIn({ onLogin, message }) {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        });
    }

    const sendData = (event) => {
        event.preventDefault();
        onLogin(data);
    }

    return (
       <Container>
           <Row className={"justify-content-md-center"}>
               <Col xs lg="6">
                   <Form className={"g-3 p-5"} onSubmit={sendData}>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Label>Email address</Form.Label>
                           <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleInputChange} />
                       </Form.Group>
                       <Form.Group className="mb-3" controlId="formBasicPassword">
                           <Form.Label>Password</Form.Label>
                           <Form.Control name="password" type="password" placeholder="Password" onChange={handleInputChange} />
                       </Form.Group>
                       {
                           message && <Alert variant="danger">
                                <p>{ message }</p>
                           </Alert>
                       }
                       <Button variant="primary" type="submit">
                           Login
                       </Button>
                   </Form>
               </Col>
           </Row>
       </Container>
    );
}

export default SignIn;