import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../Css_Folder/navbaar.css';

const Navbarr = () => {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary" style={{
      backgroundColor: '#CCCCFF',
      backgroundImage: 'linear-gradient(315deg,  #ADD8E6 0%, #CCCCFF 74%)',
      paddingTop: '15px',
      paddingBottom: '15px',
      paddingLeft: "20px"
    }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="/SRPMLOGO.png"
            alt=""
            height="50px"
            style={{ borderRadius: '100%' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" style={navLinkStyle}>
              HOME
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" style={navLinkStyle}>
              ABOUT
            </Nav.Link>
            <NavDropdown title="OUR WORKS" id="basic-nav-dropdown" style={navdropstyle} >
              <NavDropdown.Item as={NavLink} to="/education" style={dropdownItemStyle}>
                Education
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/livelihood" style={dropdownItemStyle}>
                Livelihood
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/healthcare" style={dropdownItemStyle}>
                Health Care
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/women" style={dropdownItemStyle}>
                Women Empowerment
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/awarecamp" style={dropdownItemStyle}>
                Awareness Camp
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/environment" style={dropdownItemStyle}>
                Environment
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/awareness" style={navLinkStyle}>
              AWARENESS
            </Nav.Link>
            <Nav.Link as={NavLink} to="/finishedWork" style={navLinkStyle}>
              FINISHED WORK
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" style={navLinkStyle}>
              CONTACT US
            </Nav.Link>
            <Nav.Link as={NavLink} to="/student" style={navLinkStyle}>
              STUDENT ATTENDANCE
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

};

const navLinkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontFamily: 'Quicksand, sans-serif',
  fontWeight: 'bold',
  fontSize: '18px',
  padding: '15px'

};

const navdropstyle = {
  textDecoration: 'none',
  color: 'white',
  fontFamily: 'Quicksand, sans-serif',
  fontWeight: 'bold',
  fontSize: '18px',
  padding: '7px',
};

const dropdownItemStyle = {
  color: 'Grey',
  textDecoration: 'none',
  fontFamily: "'Quicksand', sans-serif",
  fontSize: '18px',
  fontWeight: 'bold',
  padding: '5px 50px',

};

export default Navbarr;

