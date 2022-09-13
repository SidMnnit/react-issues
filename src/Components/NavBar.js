import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.svg';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function NavBar() {
    return (
        <React.Fragment>
           <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
                <Navbar.Brand style={{marginTop: "10px"}}><h2><i class="bi bi-github" size='lg'></i></h2></Navbar.Brand>
                <Navbar.Brand href="#home">Product</Navbar.Brand>
                <Nav className="me-auto">
                    <Navbar.Brand href="#home">Solutions</Navbar.Brand>
                    <Navbar.Brand href="#features">Open Source</Navbar.Brand>
                    <Navbar.Brand href="#pricing">Pricing</Navbar.Brand>
                </Nav>
                <Nav>
                    <Navbar.Brand >
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control placeholder="Search" style={{opacity: 0.2}} />
                            </Col>
                        </Row>
                    </Form>
                    </Navbar.Brand>
                    <Navbar.Brand href="#">Sign In</Navbar.Brand>
                    <Navbar.Brand href="#">Sign Up</Navbar.Brand>
                </Nav>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}

export default NavBar;
