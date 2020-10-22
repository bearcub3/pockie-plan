import React from 'react';
import { IonHeader, IonContent } from '@ionic/react';
import { Container, Col, Row, Card, CardColumns } from 'react-bootstrap';
import Navigation from './components/Navigation'

export default function Goals() {
  return (
    <IonContent>
        <Container fluid>
            <Navigation />
                <Col md={{ span: 8, offset: 2 }} lg={{ span: 10, offset: 1 }}>
                    <Row>
                        <IonHeader>
                            <h3 className="header__title">Goals Of The Final App</h3>
                        </IonHeader>
                    </Row>
                    <Row className="p-3">
                        <CardColumns>
                            <Card>
                                <Card.Header>Localization</Card.Header>
                                <Card.Body>
                                    <p>
                                    This app will provide two currencies, British Pounds and Korean Won.
                                    Based on user's locale data on his/her native device, the main currency will be set up automatically.
                                    Users will be given a choice at the settings whether they want to see the difference between the two currencies.
                                    This feature leaves us the market for the app won't be capped within a country, indicating that the app could potentially be built to target global users.
                                    </p>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header>Data Visualisation</Card.Header>
                                <Card.Body>
                                    <p>
                                    Based on a user's finance data which will aggregate
                                    over time, this app will show the user his/her
                                    consumption patterns and help them to have better
                                    awareness of their consumer habits. It also helps to
                                    analyse the user's overall finance state in a more
                                    readable and insightful manner with bar graphs.
                                    </p>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header>Personalisation & Integration</Card.Header>
                                <Card.Body>
                                    <p>
                                    Users can keep track of their income and expenses and it also helps building a healthy habit for users. 
                                    And they can share their financial state with other users to achieve a goal together and to build a transparent partnership.
                                    </p>
                                </Card.Body>
                            </Card>
                        </CardColumns>
                        
                    </Row>
                </Col>
            </Container>
        </IonContent>
  );
}