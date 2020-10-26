import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Layout from '../components/Layout';
import Expense from '../assets/images/expense_screen.png';
import Saving from '../assets/images/saving_screen.png';

export default function RecordScreen() {
  return (
    <Layout menu="Prototype" title="Daily Record">
      <Col>
        <Row className="p-3">
          <div className="screen__context">
            <h6 className="screen__type">Daily Record Screen</h6>
            <p>The centre button(+) On the bottom tab menu from the profile screen leads users to this screen. Users can record their income, expense and saving details on this screen.</p>
            <p>Each detail will be sent to the database server and stored into respective database models.</p>
            <p>For the saving tab, users can choose either personal mode or joint mode. The default value can differ whether users choose personal saving goal or not.</p>
            <dl>
              <dt className="sub__title">Description</dt>
              <dd className="sub__context">This will be a dropdown menu. Depending on the category(expense/income/saving), the list of the dropdown menu will vary.</dd>
            </dl>
          </div>
          <p>
            <img src={Expense} className="mobile__img" width="340" alt="Pockie Expense transaction" />
          </p>
          <p>
            <img src={Saving} className="mobile__img" width="340" alt="Pockie Saving transaction" />
          </p>
        </Row>
      </Col>
    </Layout>
  );
}