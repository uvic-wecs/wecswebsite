import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Import the CSS file

const buttonStyle = { // this is for the Executive button itself
    backgroundColor: '#ffd3de', // Custom background color
    color: '#76565e',
    border: 'none', // Remove border
    padding: '8px 10px', // Adjust padding to match other navbar items
    boxShadow: 'none' // Remove any box shadow
};

function TeamDropdown() {
    const [hash, setHash] = useState(window.location.hash);

    useEffect(() => {
        const handleHashChange = () => setHash(window.location.hash);
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const teamHashes = ['#team', '#positions'];
    const isTeamActive = teamHashes.includes(hash);
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" 
            style={{
                ...buttonStyle,
                color: isTeamActive ? '#191919' : '#76565e'}}>
                Executive
            </Dropdown.Toggle>

            <Dropdown.Menu style={{backgroundColor: '#ffd3de'}} className="custom-dropdown-menu">
                <Dropdown.Item href="#team" className={hash === '#team' ? 'active-child' : ''}>Our Team</Dropdown.Item>
                <Dropdown.Item href="#positions" className={hash === '#positions' ? 'active-child' : ''}>Open Positions</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

function EventsDropdown() {
    const [hash, setHash] = useState(window.location.hash);

    useEffect(() => {
        const handleHashChange = () => setHash(window.location.hash);
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const eventHashes = ['#calendar', '#events-blog'];
    const isEventsActive = eventHashes.includes(hash);
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" 
                style={{...buttonStyle,
                color: isEventsActive ? '#191919' : '#76565e'}}>
                Events
            </Dropdown.Toggle>

            <Dropdown.Menu style={{backgroundColor: '#ffd3de'}} className="custom-dropdown-menu">
                <Dropdown.Item href="#calendar" className={hash === '#calendar' ? 'active-child' : ''}>Events Calendar</Dropdown.Item>
                <Dropdown.Item href="#events-blog" className={hash === '#events-blog' ? 'active-child' : ''}>Events Blog</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export {TeamDropdown, EventsDropdown};
