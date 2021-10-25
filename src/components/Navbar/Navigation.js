import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Ecommerce Strapi React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
                            <Nav.Link as={Link} to="/masVendidos">Mas vendidos</Nav.Link>
                            <Nav.Link as={Link} to="/descuentos">Descuentos</Nav.Link>
                            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/custom">Custom</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/accesorios">Accesorios</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/partes">Partes de auto</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/auth/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/auth/register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
