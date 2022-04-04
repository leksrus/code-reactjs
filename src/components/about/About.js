import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function About() {
    return (
        <Container>
            <Row className="mt-3">
                <Col md={6} lg={6}>
                    <Image src="https://firebasestorage.googleapis.com/v0/b/tech-market-bad6f.appspot.com/o/about%2Fabout-image.jpg?alt=media&token=ee464aba-c048-439c-9cbc-733c96f831ce" fluid={true} alt="about as gamer pc" />
                </Col>
                <Col md={6} lg={6}>
                    <h5><b>Tech Market</b></h5>Was born for one proposition to sell top personal computer hardware for gaming.
                        You can find all kind of hardware components in one place with competitive prices.
                    <p>
                        Also you can choose you hardware and make us to ensambled it for you and we send it anywhere you live.</p>
                    <p>
                        Also you can choose you hardware and make us to ensambled it for you and we send it anywhere you live.</p>
                </Col>
            </Row>
            <Row className="mt-5">
                <Image src="https://firebasestorage.googleapis.com/v0/b/tech-market-bad6f.appspot.com/o/about%2Fabout-image-2.jpg?alt=media&token=2dad8796-06eb-433b-8274-9a6601e5b9f0" fluid={true} alt="about as gamer pc another" />
            </Row>
        </Container>
    );
}

export  default About;