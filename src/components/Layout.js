import React from 'react';
import { IonHeader, IonContent } from '@ionic/react';
import { Container, Col, Row } from 'react-bootstrap';
import Navigation from './Navigation'

export default function Layout({menu, title, children}) {
  return (
    <IonContent>
        <Container fluid>
            <Navigation />
                <Col md={{ span: 8, offset: 2 }} lg={{ span: 10, offset: 1 }}>
                    <Row>
                        <IonHeader>
                            <h3 className="header__title">{menu} {title && <span> : {title}</span>}</h3>
                        </IonHeader>
                    </Row>
                    <Row className="p-3">
                        {children}
                    </Row>
                </Col>
            </Container>
        </IonContent>
  );
}