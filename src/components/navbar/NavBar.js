import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import HeadLogo from "../head-logo/HeadLogo";
import CartWidget from "../cart-widget/CartWidget"
import './NavBar.css'

function NavBar(){
    return (
        <header>
            <Navbar bg="dark" expand="lg" sticky="top" variant="dark">
                <Container fluid>
                    <Navbar.Link href="#home">
                        <HeadLogo/>
                    </Navbar.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home" active>Home</Nav.Link>
                            <NavDropdown title="Categories" id="products-category-dropdown">
                                <NavDropdown.Item href="#action/3.1">CPU</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">GPU</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Memory RAM</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">SSD</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">Keyboards</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">Mouses</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.7">All Products</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                        </Nav>
                        <div className="d-flex">
                            <CartWidget/>
                            <Button className="me-3" variant="outline-primary">Sing in</Button>{' '}
                            <Button variant="outline-success">Sing up</Button>{' '}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default NavBar;