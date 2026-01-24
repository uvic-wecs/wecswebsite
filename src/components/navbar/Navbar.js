import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import wecs from '../../resources/logo/WECS Logo.webp';
import './styles.css';
import { EventsDropdown, TeamDropdown } from './Dropdown';

function Navigation() {
    const [activeKey, setActiveKey] = useState('#home');

    // this allows us to get the URL from the browser.
    const location = useLocation();

    const handleBrandClick = () => {
        setActiveKey('#home');
    };

    // This useEffect method will be triggered every time the location variable changes
    useEffect(() => {
        if (location.pathname === '/') {
            // There is nothing after the normal url, so we should go to the home page
            setActiveKey('#home');
        } else {
            // when the URL is at the about page, location.pathname will be /about,
            // because of the # routing we want to replace the / with a #
            setActiveKey(location.pathname.replace('/', '#'));
        }
    }, [location]);


    return (
        <Navbar expand="lg">

            <Container>
                <Navbar.Brand href="#home" onClick={handleBrandClick}><img src={wecs} width="75" height="75"
                    alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" activeKey={activeKey} onSelect={(selectedKey) => setActiveKey(selectedKey)}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        
                        <EventsDropdown />
                        <Nav.Link href="#newsletter">Newsletter</Nav.Link>
                        <TeamDropdown />
                        <Nav.Link href="#sponsors">Sponsors</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
}

export default Navigation