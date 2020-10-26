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
                <li>
                  <p>The Slide button on the top left side is to let users choose whether they want to see the other currency rate based on their main currency selection.</p>
                  <p>After investigation, the live currency conversion service is not available as all commercial currency API only offer the conversion service with a paid membership. As such, the average rate will be for this occasion.</p>
                </li>
                <li>Users can see their daily expense and income below their profile image and name</li>
                <li>Spending patterns can be interpreted readily by a pie chart during a certain period of time so that users can easily tell their spending habits.</li>
                <li>Saving goals can be set from this screen.</li>
            </ul>
          </div>
          <img src={Profile} width="340" alt="Pockie User Screen" className="mobile__img" />
        </Row>
      </Col>
    </Layout>
  );
}