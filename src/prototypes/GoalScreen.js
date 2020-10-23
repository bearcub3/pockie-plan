import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Layout from '../components/Layout';
import Set from '../assets/images/set_goal_screen.png';
import View from '../assets/images/goal_screen.png';

export default function GoalScreen() {
  return (
    <Layout menu="Prototype" title="User Saving Goals">
      <Col md={6}>
        <Row className="p-3">
          <div className="screen__context">
            <h6 className="screen__type">Viewing saving goals</h6>
            <p>Users can check each saving goal's progress with a bar graph and other participants.</p>
          </div>
          <img src={View} width="340" alt="Viewing saving goals Screen" className="mobile__img" />
        </Row>
      </Col>
      <Col md={6}>
        <Row className="p-3">
          <div className="screen__context">
            <h6 className="screen__type">Setting a saving goal</h6>
            <p>Users can set up a goal after completing the forms. Each goal can be a private or a joint one.</p>
            <ol>
                <li>Choose the purpose of saving</li>
                <li>The amount of saving</li>
                <li>The period of saving</li>
                <li>If it is a joint saving, users can see their financial partners and choose participants for the saving.</li>
            </ol>
          </div>
          <img src={Set} width="340" alt="Setting a saving goal Screen" className="mobile__img" />
        </Row>
      </Col>
    </Layout>
  );
}