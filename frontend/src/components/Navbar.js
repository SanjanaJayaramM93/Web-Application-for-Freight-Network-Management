import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const NavbarComponent = ({ handleAddTruck }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Dynamite Transport</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Truck Management</Nav.Link>
          
        </Nav>
          {/* 
        <Button variant="success" onClick={handleAddTruck}>
          Add Truck
        </Button>
        */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;

