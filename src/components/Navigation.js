import React from 'react'
import { Link } from 'react-router-dom';
import { IonItemDivider } from '@ionic/react';
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
                <Nav.Link>
                    <Link to="/goals">Goal Of The Final app</Link>
                </Nav.Link>
                <NavDropdown title="Personas" id="nav-dropdown">
                    <NavDropdown.Item eventKey="2.1">
                        <Nav.Link>
                            Case Study 01 - A personal user
                        </Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="2.2">
                        <Nav.Link>
                            Case Study 02 - An organisation owner
                        </Nav.Link>
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Prototype" id="nav-dropdown">
                    <NavDropdown.Item eventKey="3.1">
                        <Nav.Link>
                            <Link to="/prototype/entries">Entries</Link>
                        </Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="3.2">
                        <Nav.Link>
                            <Link to="/prototype/profile">Profile</Link>
                        </Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="3.3">
                        <Nav.Link>
                            <Link to="/prototype/record">Daily Record</Link>
                        </Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="3.4">
                        <Nav.Link>
                            <Link to="/prototype/invite">User Partnership</Link>
                        </Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="3.5">
                        <Nav.Link>
                            <Link to="/prototype/finance">User Finance State</Link>
                        </Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="3.5">
                        <Nav.Link>
                            <Link to="/prototype/goal">User Saving Goals</Link>
                        </Nav.Link>
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                    <Link to="/critique">Critique</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/techstacks">Techstacks</Link>
                </Nav.Link>  
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
}

export default Navigation;
