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
            <p>Each details will be sent to the database server and stored into respective database models. Users can choose whether they want to share the details or not if they have joint account.</p>
            <dl>
              <dt className="sub__title">Description</dt>
              <dd className="sub__context">This will be a dropdown menu. Depending on the category(expense/income/saving), the list will vary.</dd>
            </dl>
          </div>
          <img src={Record} width="340" alt="Pockie User Screen" className="mobile__img" />
        </Row>
      </Col>
    </Layout>
  );
}