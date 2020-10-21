import React from 'react'
import { Link } from 'react-router-dom';
import { IonItem } from '@ionic/react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { ReactComponent as Logo} from '../assets/images/pockie_logo.svg';

function Navigation() {
    return (
    <Navbar expand="lg" style={{ padding: `10px 0` }}>
        <Navbar.Brand href="/">
            <Logo
                width={100}
                style={{ display: 'flex', margin: `10px 50px 10px 0` }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <IonItem>
                  <Link to="/">Goal of the final app</Link>
                </IonItem>
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
                <IonItem>
                  <Link to="/prototype">
                      Prototype
                  </Link>
                </IonItem>
                <IonItem>
                  <Link to="/critique">
                      Critique
                  </Link>
                </IonItem>
                <IonItem>
                  <Link to="/techstacks">
                      Techstacks
                  </Link>
                </IonItem>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
}

export default Navigation;
