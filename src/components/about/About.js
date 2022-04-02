import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function About() {
    return (
        <Container>
            <Row className="mt-3">
                <Col md={6} lg={6}>
                    <Image src="/images/about-image.jpg" fluid={true} alt="about as gamer pc" />
                </Col>
                <Col md={6} lg={6}>
                    <p><h5><b>Tech Market</b></h5>Was born for one proposition to sell top personal computer hardware for gaming.
                        You can find all kind of hardware components in one place with competitive prices.</p>
                    <p>
                        Also you can choose you hardware and make us to ensambled it for you and we send it anywhere you live.</p>
                    <p>
                        Also you can choose you hardware and make us to ensambled it for you and we send it anywhere you live.</p>
                </Col>
            </Row>
            <Row className="mt-5">
                <Image src="/images/about-image-2.jpg" fluid={true} alt="about as gamer pc another" />
            </Row>
        </Container>
    );
}

export  default About;