import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './Home';
import Goals from './Goals';
import Techstacks from './Techstacks';
import InitialScreen from './prototypes/InitialScreen'
import ProfileScreen from './prototypes/ProfileScreen'
import RecordScreen from './prototypes/RecordScreen'
import InviteScreen from './prototypes/InviteScreen'
import FinanceScreen from './prototypes/FinanceScreen'
import GoalScreen from './prototypes/GoalScreen'

export default function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
            <Route path="/" exact component={Home} />
            <Route path="/goals" component={Goals} /> 
            <Route path="/prototype/entries" component={InitialScreen} /> 
            <Route path="/prototype/profile" component={ProfileScreen} /> 
            <Route path="/prototype/record" component={RecordScreen} /> 
            <Route path="/prototype/invite" component={InviteScreen} /> 
            <Route path="/prototype/finance" component={FinanceScreen} /> 
            <Route path="/prototype/goal" component={GoalScreen} /> 
            <Route path="/techstacks" component={Techstacks} />
          </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}
