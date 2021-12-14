import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Ramat Cars Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/custom">Custom</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/accesorios">Accesorios</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/nosotros">Nosotros</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/masVendidos">Mas vendidos</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/descuentos">Descuentos</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/auth/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/auth/register">Register</Nav.Link>
                        </Nav>
                        <Nav>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
