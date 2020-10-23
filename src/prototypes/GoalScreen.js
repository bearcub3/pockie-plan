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
            <dl>
              <dt className="sub__title">Personal goal</dt>
              <dd className="sub__context">User can see how much progress he/she has made with a progress bar. And it shows how many day/week/month left </dd>
            </dl>
            <dl>
              <dt className="sub__title">Joint goal</dt>
              <dd className="sub__context">It has the same functionalities with Personal goal. On top of that, the current user tabs the partner tag, it would show the contribution over the pregress bar.</dd>
            </dl>
          </div>
          <img src={View} width="340" alt="Viewing saving goals Screen" className="mobile__img" />
        </Row>
      </Col>
      <Col md={6}>
        <Row className="p-3">
          <div className="screen__context">
            <h6 className="screen__type">Setting a saving goal</h6>
            <p>Users can set up a goal after completing the forms. Each goal can be either a personal or a joint one.</p>
            <ol>
                <li>
                  <p>Choose the purpose of saving</p>
                  <small className="reference">It will be a dropdown menu with a set of certain purpose. If none of them are related, users can choose 'others'.</small>
                </li>
                <li>The amount of saving</li>
                <li>The period of saving</li>
                <li>If users set the goal jointly, users can see their financial partners and choose participants for the saving.</li>
            </ol>
          </div>
          <img src={Set} width="340" alt="Setting a saving goal Screen" className="mobile__img" />
        </Row>
      </Col>
    </Layout>
  );
}