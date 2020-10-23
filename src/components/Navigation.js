import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { ReactComponent as Logo} from '../assets/images/pockie_logo.svg';

function Navigation() {
    return (
    <Navbar collapseOnSelect expand="lg" style={{ padding: `10px 0` }}>
        <Navbar.Brand href="/">
            <Logo
                width={100}
                style={{ display: 'flex', margin: `10px 50px 10px 0` }}
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link to="/goals">Goal Of The Final app</Link>
                <Link to="/critique">Personas</Link>
                <NavDropdown title="Prototype" id="nav-dropdown">
                    <NavDropdown.Item eventKey="3.1">
                        <Link to="/prototype/entries">Entries</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="3.2">
                        <Link to="/prototype/profile">Profile</Link>
    
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="3.3">
                 
                            <Link to="/prototype/record">Daily Record</Link>
    
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="3.4">
                 
                            <Link to="/prototype/invite">User Partnership</Link>
    
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="3.5">
                 
                            <Link to="/prototype/finance">User Finance State</Link>
    
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="3.5">
                 
                            <Link to="/prototype/goal">User Saving Goals</Link>
    
                    </NavDropdown.Item>
                </NavDropdown>
         
                    <Link to="/critique">Critique</Link>
         
                    <Link to="/techstacks">Techstacks</Link>  
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
}

export default Navigation;
