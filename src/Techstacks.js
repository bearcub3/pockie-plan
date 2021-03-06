import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import Layout from './components/Layout';
import Database from './assets/images/pockie_database.png'

export default function Techstacks() {
    return (
        <Layout menu="Techstacks">
            <CardColumns className="column--width">
                <Card>
                    <Card.Header>React Native</Card.Header>
                    <Card.Body>
                        <p>competency : 4 out of 5</p>
                        <p>
                        React is a great and popular JS library for creating UI components and its features can even be used for native applications
                        </p>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>Expo</Card.Header>
                    <Card.Body>
                        <p>competency : 3.5 out of 5</p>
                        <p>
                        Expo is a great framework for react native using Metro JS bundler to build both Android and iOS Native Applications.
                        </p>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>Redux</Card.Header>
                    <Card.Body>
                        <p>competency : 3 out of 5</p>
                        <p>
                        Redux is used as a state management library as Pockie will deal with a variety of financial data. Having a single source of truth would be more ideal to keep each component more legible and maintainable by applying the design principle, SoC.
                        </p>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>React Native SVG Charts</Card.Header>
                    <Card.Body>
                        <p>competency : 3 out of 5</p>
                        <p>
                        A simple JS library to implement data visualisation based on users' data.
                        </p>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>PostgreSQL</Card.Header>
                    <Card.Body className="flex">
                        <p>competency : 2 out of 5</p>
                        <p>
                        As you can see in the image below, so far there will be 5 relational database tables. 
                        Each Income, Expense and Goal table is connected to User table with each user's unique ID. 
                        </p>
                        <p>
                            <img src={Database} width="260" alt="pockie database" />
                        </p>
                        <code>
                            <p className="comment">User Data</p>  
                            user_id: unique id,<br />    
                            name: string,<br />  
                            email: string,<br />  
                            joint: boolean,<br />  
                            participants: list[user_id],<br />   
                            income_id: Foreign Key,<br />  
                            expense_id: Foreign Key,<br />  
                            goal_id: Foreign Key,<br />  
                            currency: boolean,<br />  
                        </code>
                        <hr />
                        <code>
                            <p className="comment">Income Data</p>  
                            income_id: unique id,<br />    
                            user_id: Foreign Key,<br />    
                            type: string,<br />    
                            amount: number,<br />    
                            description: string,<br />    
                            created: timestamp<br />    
                        </code>
                        <hr />
                        <code>
                            <p className="comment">Expense Data</p>  
                            expense_id: unique id,<br />    
                            user_id: Foreign Key,<br />    
                            type: string,<br />    
                            amount: number,<br />    
                            description: string,<br />    
                            created: timestamp<br />    
                        </code>
                        <hr />
                        <code>
                            <p className="comment">Goal Data</p>  
                            goal_id: id,<br /> 
                            user_id: Foreign Key,<br /> 
                            purpose: string,<br /> 
                            amount: number,<br /> 
                            period: string,<br /> 
                            joint: boolean,<br /> 
                            participants: list[user_id],<br /> 
                            completed: boolean,<br /> 
                            start: timestamp<br /> 
                        </code>
                        <hr />
                        <code>
                            <p className="comment">Saving Data</p>  
                            saving_id: id,<br /> 
                            goal_id: Foreign Key,<br /> 
                            amount: number,<br /> 
                            created: timestamp<br /> 
                        </code>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>Flask</Card.Header>
                    <Card.Body>
                        <p>competency : 2 out of 5</p>
                        <p>
                        APIs will be created with Flask to communicate with the database server.
                        As Flask doesn't have many boilerplates, it is very light and easy to configure. 
                        </p>
                    </Card.Body>
                </Card>
                </CardColumns>
        </Layout>
    );
}