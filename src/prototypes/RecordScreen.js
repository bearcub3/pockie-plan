import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Layout from '../components/Layout';
import Record from '../assets/images/expense_screen.png';

export default function RecordScreen() {
  return (
    <Layout menu="Prototype" title="Daily Record">
      <Col>
        <Row className="p-3">
          <div className="screen__context">
            <h6 className="screen__type">Daily Record Screen</h6>
            <p>The center button(+) On the bottom tab menu leads users to this screen. Users can record their income, expense and saving details on this screen.</p>
            <p>Each details will be sent to the database server and stored into respective database tables. User can choose whether they want to share the details or not if they have joint account.</p>
          </div>
          <img src={Record} width="340" alt="Pockie User Screen" className="mobile__img" />
        </Row>
      </Col>
    </Layout>
  );
}