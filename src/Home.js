import React from 'react';
import { Row } from 'react-bootstrap';

import Layout from './components/Layout';
import Phrase from './assets/images/phrase.png';

export default function Home() {
  return (
    <Layout menu="About Pockie">
        <Row className="p-3">
            <img src={Phrase} width="340" alt="Pockie Splash Screen" />
        </Row>
        <Row className="p-3">
            <p>
                Pokie is a '<b>Personal finance app</b>' which lets users keep
                up with their expenses and to help them to maintain a
                healthier financial state. Pockie gives users more
                control over their money as the app provides services
                such as, analyzing their spending habits(data visualisation) and their usual
                consumption patterns. It also allows users to keep track of their 
                expenses, so they can be more reflective and self-manage
                their financial state.
            </p>
            <p>
                Furthermore, Pockie enables users to achieve a goal or
                multiple goals with others and to have more transparent
                money management amongst other users, such as a partner,
                parents, simply by inviting them over.
            </p>
            <p>
                As we live in a modern society promoting consumer
                culture, we often neglect our money management. As your
                money matters to you, how you spend it and keeping it under
                control is crucial.
            </p>
        </Row>
    </Layout>
  );
}