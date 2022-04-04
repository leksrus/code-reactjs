import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Footer.css'

function Footer() {
   return(
       <Container fluid={true} className={"footer-container"}>
            <Row className={"justify-content-center pt-4 pb-4 row-2"}>
                <Col>
                    <Row className={"row-2"}>
                        <Col lg={4} md={4} sm={12} className={"text-center"}>
                                            <h5>
                                <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                       className="bi bi-bag" viewBox="0 0 16 16">
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                                    /></svg></span
                                ><b> Tech Market Store</b>
                                            </h5>
                        </Col>
                        <Col lg={2} md={2} sm={6} className={"offset-0 offset-md-1 offset-lg-1 my-sm-0 mt-5"}>
                            <ul className="list-unstyled">
                                <li>Customers</li>
                                <li>Information</li>
                                <li>Customers Services</li>
                            </ul>
                        </Col>
                        <Col lg={2} md={2} sm={6} className={"offset-0 offset-md-2 offset-lg-2 my-sm-0 mt-5"}>
                            <ul className="list-unstyled">
                                <li>Company</li>
                                <li>About</li>
                                <li>Careers - <span className="careers">We're-hiring</span></li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
           <Row className={"justify-content-center row-1"}>
                <Col>
                    <Row className={"my-4 row-1"}>
                        <Col lg={4} md={6} sm={12} className={"text-center"}>
                            <small>&#9400; Techno Market</small>
                        </Col>
                        <Col lg={4} md={6} sm={12} className={"offset-md-3 offset-lg-3"}>
                            <div className="d-flex justify-content-center">
                                <small>
                                    <span className="me-1"> contact-info@techmarket.com </span>
                                    <span>
                    <img className="footer-img me-1"
                                                                          src="https://firebasestorage.googleapis.com/v0/b/tech-market-bad6f.appspot.com/o/footer%2Finstagram.png?alt=media&token=9bc0f269-c6b6-4574-b08c-497409fe8f0d"
                                                                          alt="our instagram"/></span>
                                    <span>
                    <img className="footer-img me-1"
                                                                         src="https://firebasestorage.googleapis.com/v0/b/tech-market-bad6f.appspot.com/o/footer%2Ffacebook.ico?alt=media&token=4b9085ca-ab93-40af-9ae3-dc6069f69021"
                                                                         alt="our facebook"/></span>
                                    <span><img className="footer-img me-1" src="https://firebasestorage.googleapis.com/v0/b/tech-market-bad6f.appspot.com/o/footer%2Fwhatsapp.png?alt=media&token=ebd2b769-d108-48d1-b99c-f498d86902e1"
                                               alt="our whatsapp"/></span
                                    ></small>
                            </div>
                        </Col>
                    </Row>
                </Col>
           </Row>
       </Container>
   );
}

export default Footer;