import Container from "react-bootstrap/Container";
import { LinkContainer } from 'react-router-bootstrap'
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
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <HeadLogo/>
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <LinkContainer to="/">
                                <Nav.Link href="#home" active>Home</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Categories" id="products-category-dropdown">
                                <LinkContainer to="/category/cpu">
                                    <NavDropdown.Item href="#action/3.1">CPU</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/category/memory">
                                    <NavDropdown.Item href="#action/3.3">Memory RAM</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/category/ssd">
                                    <NavDropdown.Item href="#action/3.4">SSD</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/category/keyboard">
                                    <NavDropdown.Item href="#action/3.5">Keyboards</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/category/mouse">
                                    <NavDropdown.Item href="#action/3.6">Mouses</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to="/category/all">
                                    <NavDropdown.Item href="#action/3.7">All Products</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <LinkContainer to="/contact">
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link href="#about">About</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <div className="d-flex">
                            <CartWidget/>
                            <LinkContainer to="/signin">
                                <Button className="me-3" variant="outline-primary">Sing in</Button>
                            </LinkContainer>
                            <LinkContainer to="/signout">
                                <Button variant="outline-success">Sing up</Button>
                            </LinkContainer>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default NavBar;