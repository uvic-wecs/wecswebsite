import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import wecs from '../../resources/WECS Logo.png'

const makePink = {
    "background-color": "#ffecfd"
}

function Navigation() {
    const [activeKey, setActiveKey] = useState('#home');

    const handleBrandClick = () => {
        setActiveKey('#home');
    };

    return (
        <Navbar expand="lg" style={makePink}>

            <Container>
                <Navbar.Brand href="#home" onClick={handleBrandClick}><img src={wecs} width="75" height="75" 
                     alt="Logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" activeKey={activeKey} onSelect={(selectedKey) => setActiveKey(selectedKey)}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#team">Our Team</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation