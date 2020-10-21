import React from 'react';
import { IonHeader, IonPage } from '@ionic/react';
import { Container, Col, Row, Card, CardColumns } from 'react-bootstrap';
import Navigation from './components/Navigation'


export default function Techstacks() {
    return (
        <IonPage>
        <Container fluid>
            <Navigation />
            <Col>
                <Row className="p-3">
                    <h3>Techstacks</h3>
                </Row>
                <Row className="p-3">
                    <CardColumns>
                        <Card>
                            <Card.Header>React Native</Card.Header>
                            <Card.Body>
                                <p>
                                    React is a great JS library for creating UI components and its features can be used for native applications
                                </p>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>Expo</Card.Header>
                            <Card.Body>
                                <p>
                                Expo is a great framework for react native using Metro JS bundler both for Android and iOS platforms.
                                </p>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>Redux</Card.Header>
                            <Card.Body>
                                <p>
                                A state management library as Pockie will deal with a variety of financial data, having a single source of truth would be more ideal to keep each component more legible and maintainable by virtue of applying the design principle, SoC.
                                </p>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>Chartjs</Card.Header>
                            <Card.Body>
                                <p>
                                A simple JS library to implement data visualisation based on users' data.
                                </p>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </Row>
                <Row className="p-3">
                    <p>PostgreSQL, Flask and Docker were considered to be used for the application. However, it's not finalised yet as TrueLayer provides the crucial API services Pockie needs to implement. At the moment, most stacks are front-end related ones.</p>
                </Row>
            </Col>
        </Container>
        </IonPage>
    );
}