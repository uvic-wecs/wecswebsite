import React from 'react';
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

function CustomDropdown() {
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" style={buttonStyle}>
                Executive
            </Dropdown.Toggle>

            <Dropdown.Menu style={{backgroundColor: '#ffd3de'}} className="custom-dropdown-menu">
                <Dropdown.Item href="#team">Our Team</Dropdown.Item>
                <Dropdown.Item href="#positions">Open Positions</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default CustomDropdown;
