import React from 'react';
import { IonHeader, IonContent } from '@ionic/react';
import { Container, Col, Row } from 'react-bootstrap';
import Navigation from './components/Navigation'

export default function Goals() {
  return (
    <IonContent>
        <Container fluid>
            <Navigation />
                <Col>
                    <Row>
                        <IonHeader>
                            <h3 className="header__title">Goals Of The Final App</h3>
                        </IonHeader>
                    </Row>
                    <Row className="p-3">
                        <dl>
                            <dt>Localization</dt>
                            <dd>
                                This app will provide two languages, English and
                                Korean and two currencies, British pounds and Korean
                                Won for users. This localization will be provided by
                                accessing locale data on the native device. The
                                market for the app won't be capped within a country,
                                indicating that the app could potentially be built
                                to target global users.
                                <hr />
                            </dd>
                            <dt>Data Visualisation</dt>
                            <dd>
                                Based on a user's finance data which will aggregate
                                over time, this app will show the user his/her
                                consumption patterns and help them to have better
                                awareness of their consumer habits. It also helps to
                                analyse the user's overall finance state in a more
                                readable and insightful manner with bar graphs.
                                <hr />
                            </dd>
                            <dt>Personalisation</dt>
                            <dd>
                                Users can either manually update their finance
                                records or link their account(s) to the app through
                                True Layer APIs(a 3rd party service to integrate
                                with user's accounts to the app in a more secure and
                                seamless way).
                                <hr />
                            </dd>
                        </dl>
                    </Row>
                </Col>
            </Container>
        </IonContent>
  );
}