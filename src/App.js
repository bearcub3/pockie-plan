import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './Home';
import Goals from './Goals';
import Techstacks from './Techstacks';

export default function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
            <Route path="/" exact component={Home} />
            <Route path="/goals" component={Goals} /> 
            <Route path="/techstacks" component={Techstacks} />
          </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}
