import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Layout from '../components/Layout';
import Profile from '../assets/images/profile_screen.png';

export default function ProfileScreen() {
  return (
    <Layout menu="Prototype" title="User Profile">
      <Col>
        <Row className="p-3">
          <div className="screen__context">
            <h6 className="screen__type">Profile Screen</h6>
            <p>This is the main user profile screen which will appear once a user logs in.</p>
            <ul>
                <li>The Slide Button on the Top-left side is to let users choose whether they want to see the other currency rate based on their main currency</li>
                <li>Users can see their daily expense and income below their profile image and name</li>
                <li>Spending Pattern can be interpreted readily by a pie chart during a certain period of time</li>
                <li>Saving goals can be set</li>
                <li>Users can invite other users and share their financial state with them</li>
            </ul>
          </div>
          <img src={Profile} width="340" alt="Pockie User Screen" className="mobile__img" />
        </Row>
      </Col>
    </Layout>
  );
}