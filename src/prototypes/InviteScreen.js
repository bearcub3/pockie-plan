import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Layout from '../components/Layout';
import Invite from '../assets/images/invite_screen.png';

export default function InviteScreen() {
  return (
    <Layout menu="Prototype" title="User Partnership">
      <Col>
        <Row className="p-3">
          <div className="screen__context">
            <h6 className="screen__type">Invitation Screen</h6>
            <p>Each user can invite other users who have Pockie current accounts.</p>
          </div>
          <img src={Invite} width="340" alt="Pockie Invite Screen" className="mobile__img" />
        </Row>
      </Col>
    </Layout>
  );
}