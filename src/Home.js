import React from 'react';
import { IonHeader, IonContent } from '@ionic/react';
import { Container, Col, Row } from 'react-bootstrap';
import Navigation from './components/Navigation'

import Splash from './assets/images/splash_screen.png';

export default function Home() {
  return (
    <IonContent>
        <Container fluid>
            <Navigation />
            <Col md={{ span: 8, offset: 2 }}>
                <Row>
                    <IonHeader>
                        <h3 className="header__title">About Pockie</h3>
                    </IonHeader>
                </Row>
                <Row className="p-3">
                    <img src={Splash} width="340" alt="Pockie Splash Screen" />
                </Row>
                <Row className="p-3">
                    <p>
                        Pokie is a '<b>Personal finance app</b>' which lets users keep
                        up with their expenses and to help them to maintain a
                        healthier financial state. Pockie gives users more
                        control over their money as the app provides services
                        such as, analyzing their spending habits and their usual
                        consumption patterns. It also keeps track of their daily
                        expenses, so they can be more reflective and self-manage
                        their financial state.
                    </p>
                    <p>
                        Furthermore, Pockie enables users to achieve a goal or
                        multiple goals with others and to have more transparent
                        money management amongst other users, such as a partner,
                        parents or colleagues, simply by inviting them over.
                        This means that Pockie is not only a personal app but
                        also, it can provide a bookkeeping service for a small
                        business or organisation to keep financial transparency
                        amongst shareholders.
                    </p>
                    <p>
                        As we live in a modern society promoting consumer
                        culture, we often neglect our money management. <b>As your
                        money matters to you, how you spend it and keeping under
                        control is crucial.</b>
                    </p>
                </Row>
                </Col>
            </Container>
        </IonContent>
  );
}