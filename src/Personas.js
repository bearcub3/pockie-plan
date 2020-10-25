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
                        financial disorder in order to save more money
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
                                Whenever she spends money, she opens Pockie and records the details of her income/expense/saving and then, her details are sent to the database and stored in it.
                            </li>
                            <li>
                                For example, she went grocery shopping and spent 32 pounds. As soon as she got in her car, she opened Pockie and put in the details. So, she wouldn't forget later in the day.
                            </li>
                            <li>
                                She also can set saving goals with Pockie. It
                                can be short term, a week, to
                                long term, years. There is no
                                restriction of having multiple
                                goals per user. For more detail, please check <Link to="/prototype/record">the prototype</Link>.
                            </li>
                            <li>
                                Over time, she will be able to
                                see her financial data analytics and
                                easily follow her money flow via
                                the app.
                            </li>
                            <li>
                                Her partner and she also can share
                                their financial state via invitation,
                                and they can set up a mutual saving goal and check the progress of the goal.
                                For more detail, please refer to <Link to="/prototype/goal">the prototype</Link>.
                            </li>
                        </ol>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Step-by-step guide : How Aimee interacts with her money transaction and her profile</Card.Title>
                    <Card.Text>
                        <section>
                            <ol>
                                <li>Aimee goes shopping in the city centre and spends 80 pounds for her mum's birthday present.</li>
                                <li>As soon as she gets a seat at a cafe after the shopping, she grabs her mobile and opens the Pockie app.</li>
                                <li>From the home screen, she touches the add button which is located in the centre of the bottom tab navigation.</li>
                                <li>Pockie opens the record screen and Aimee starts filling in the form with her shopping details in the expense section as follows;</li>
                                <li>In the centre of the screen, she fills in 80 pounds, which was her total expenditure for the shopping earlier, and she chooses the description, 'gift' from the dropdown menu. Finally she saves the details.</li>
                                <li>After she orders a black coffee at the cafe, she checks her bill and fills in the expense section with 2.50 pounds, and selects 'food & drink' in the same way in the expense section again.</li>
                                <li>She wants to check that she has been paid from her work today. So, she opens her app and starts filling in the details.</li>
                                <li>She touches the add button in the bottom tab navigation and chooses the income tab on the top.</li>
                                <li>Next, she fills in the total income of 2,500 pounds with the description as a salary and non-personal mode and saves it.</li>
                                <li>She tabs the profile screen icon which is positioned on the right hand side of the bottom tab navigation to check the overview of her current finance state.</li>
                                <li>She can see her profile picture and her name below and she checks that she has spent 105 pounds and 2,500 pounds have come into her account today.</li>
                                <li>She sees her spending pattern pie chart and realizes that her major expenditures are rent, bills and tax.</li>
                            </ol>
                        </section>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Step-by-step guide : How Aimee interacts with setting a goal</Card.Title>
                    <section>
                        <ol>
                            <li>Her partner and Aimee decide to buy a house together for their future.</li>
                            <li>So, she decided to use Pokie to keep them motivated setting a joint goal with her partner to save more money for a bigger deposit.</li>
                            <li>First, her partner opens an account and then adds her as a partner using her id.</li>
                            <li>Now they are able to share their saving goal information together as long as it's not in private mode.</li>
                            <li>She tabs the button 'set a goal' and it opens up the screen.</li>
                            <li>And then, she chooses the purpose of the goal as buying a house, sets the joint goal to 10,000 pounds, the duration of saving is set to a year. and she also chooses her partner as a joint saving participant.</li>
                            <li>Every month, she gets paid, she saves minimum 500 pounds and it has been over 6 months since her partner and she started saving.</li>
                            <li>She touches the number of saving goal box in the profile screen and it opens up the saving goal screen.</li>
                            <li>She sees that her partner and she have saved more than half of their aim for the last 6 months and she is very pleased that they are on the right track.</li>
                        </ol>
                    </section>
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