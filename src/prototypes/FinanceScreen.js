import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Layout from '../components/Layout';
import Weekly from '../assets/images/weekly_screen.png';
import Monthly from '../assets/images/monthly_screen.png';

export default function FinanceScreen() {
  return (
    <Layout menu="Prototype" title="User Finance State">
      <Col md={6}>
        <Row className="p-3">
          <div className="screen__context">
            <h6 className="screen__type">Weekly State Screen</h6>
            <p>Users can see their weekly expense, income and saving details. It will be created as an accordion tab.</p>
          </div>
          <img src={Weekly} width="340" alt="Pockie Invite Screen" className="mobile__img" />
        </Row>
      </Col>
      <Col md={6}>
        <Row className="p-3">
          <div className="screen__context">
            <h6 className="screen__type">Monthly State Screen</h6>
            <p>Users can check monthly finance state up to 6 months.</p>
          </div>
          <img src={Monthly} width="340" alt="Pockie Invite Screen" className="mobile__img" />
        </Row>
      </Col>
    </Layout>
  );
}