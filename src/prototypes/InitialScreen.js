import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Layout from '../components/Layout';
import Splash from '../assets/images/splash_screen.png';
import Login from '../assets/images/authentication_screen.png'

export default function InitialScreen() {
  return (
    <Layout menu="Prototype" title="Entries">
      <Col md={6}>
        <Row className="p-3">
          <div className="screen__context">
            <h6 className="screen__type">Splash Screen</h6>
            <p>This is the screen which will appear while the initial app loads.</p>
          </div>
          <img src={Splash} width="340" alt="Pockie Splash Screen" className="mobile__img" />
        </Row>
      </Col>
      <Col md={6}>
        <Row className="p-3">
          <div className="screen__context">
            <h6 className="screen__type">Login/SignUp Screen</h6>
            <p>A new user is required to sign up before using the app and current users need to log in to record their data.</p>
            <p>An Onboarding System is not in the scope of this version. Depending on the progression of the development, I may provide prebuilt user data for testing.</p>
          </div>
            <img src={Login} width="340" alt="Pockie Login Screen" className="mobile__img" />
        </Row>
        </Col>
    </Layout>
  );
}