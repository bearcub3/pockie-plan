import React from 'react';
import { Link } from 'react-router-dom';
import { CardColumns, Card } from 'react-bootstrap';
import Layout from './components/Layout';

import User from './assets/images/christiana-rivers-O_XIvDy0pcs-unsplash.jpg'


export default function Personas() {
  return (
    <Layout menu="User case">
        <CardColumns>
            <Card>
                <Card.Img
                    variant="top"
                    src={User}
                    alt="Persona photo"
                />
                <Card.Body>
                    <Card.Title>Aimee Smith</Card.Title>
                    <Card.Text>Developer, 34</Card.Text>
                    <Card.Text>
                        My partner and I are trying to save money
                        for the deposit to buy our first home
                        together somewhere on the outskirts of
                        Oxford. We both work as Engineers and have
                        very busy lives. Even though we both love to
                        travel and enjoy hanging out with friends,
                        we feel like we should be able to save more
                        than we do because we have a decent double
                        income. I hope Pockie can alleviate our
                        financial issue in order to save more money
                        together.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>
                        How Aimee would utilise Pockie
                    </Card.Title>
                    <Card.Text>
                        <ol>
                            <li>
                                <p>Aimiee has a Pockie account.</p>
                            </li>
                            <li>
                                Whenever she spends money, she opens Pockie and records the details of her income/expense/saving and then, her details is sent to the database and stored in it.
                            </li>
                            <li>
                                For example, she went for grocery shopping and spent 32 pounds. As soon as she got in her car, she opened Pockie and put the details. So, she wouldn't forget later in the day.
                            </li>
                            <li>
                                She also can set saving goals with Pockie. It
                                can be a short term, a week to a
                                long term, years. There is no
                                restriction of having multiple
                                goals per user. For more detail, please check <Link to="/prototype/record">the prototype</Link>.
                            </li>
                            <li>
                                Over the time, she will be able to
                                see her financial data analytics and
                                easily tell her money flow via
                                the app.
                            </li>
                            <li>
                                Her partner and she also can share
                                their financial state via invitation
                                and they can set up a mutual saving goal and check the progress of the goal.
                                Fore the detail, please refer to <Link to="/prototype/goal">the prototype</Link>.
                            </li>
                        </ol>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card id="signup">
                <Card.Body>
                    <Card.Title>Sign Up requirements</Card.Title>
                    <Card.Text>
                        <ol>
                            <li>user name</li>
                            <li>email</li>
                            <li>
                                <p>password creation</p> 
                                <small className="reference">pending: I haven't decided what type of authentication I will use yet</small>
                            </li>
                            <li>currency: automatically set by the user's locale data in their device</li>
                        </ol>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                    Onboarding system may not be able to deliver within the timeline. In this case, I will provide prebuilt user data.
                    </small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>
                        The Benefits of Pockie
                    </Card.Title>
                    <Card.Text>
                        <ul>
                            <li>Building a healthy financial habit</li>
                            <li>Taking control of their money</li>
                            <li>Having a better insight regarding their spending habits</li>
                            <li>Being mindful of their financial state</li>
                            <li>Building a transparent financial relationship with others via Pockie</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardColumns>
    </Layout>
  );
}