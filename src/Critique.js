import React from 'react';
import { Row } from 'react-bootstrap';
import Layout from './components/Layout';

import Wallets from './assets/images/spendee_wallets.PNG'
import UserWallet from './assets/images/spendee_userwallet.PNG'
import Transaction1 from './assets/images/spendee_transaction1.PNG'
import Transaction2 from './assets/images/spendee_transaction2.PNG'
import Overview from './assets/images/spendee_overview.PNG'

export default function Critique() {
    return (
        <Layout menu="Critique">
            <Row className="p-3">
                <h4 className="font-weight-bold">Application Walkthrough</h4>
            </Row>
            <Row className="p-3">
                <h5 className="font-weight-bold">Target Audience</h5>
                <section>
                    As the app can be used by anyone who wishes to have better finance management personally, There is no restriction, such as age, sex or occupation. 
                    The app could support multiple currencies and it aims for the global market.
                </section>
            </Row>
            <Row className="p-3">
                <h5 className="font-weight-bold">Initial loading</h5>
                <section>
                    <p>Once I open the application after the signup and creating a wallet, it starts with the screen that I was on when I last used the app.
                    I believe this was intentional from both engineering and ux perspectives. 
                    Most mobile applications take some time to load and they appear to have each splash screen.
                    My speculation is that the spendee may have aimed to give quicker access to its users in order to quickly update their new finance expenditure or income as a longer loading time could put a strain on usability.</p>
                    <small>I noticed that a splash screen appears at the first loading of each day.</small>
                </section>
            </Row>
            <Row className="p-3">
                <h5 className="font-weight-bold">Home Screen</h5>
                <section>
                    <p>Multiple wallets can be created from the Home screen per user.
                    They may have started like Pockie and as time went by, they may have added multiple wallet features.
                    This is worth quantitive research to find out what other people would think about the feature.
                    From my perspective, as this is a personal app, having multiple wallets seems to be unmanageable and cumbersome for users.</p>
                    <p>
                    As customers would be able to check their accounts with mobile banking apps these days, I am not convinced that the main purpose of the finance app is to try to take over those.
                    Having multiple wallets may be seen as a good feature, but, it seems to be an inordinate feature and I would consider the re-evaluation of it.
                    Pockie provides personal/joint options for users instead. So, If users want to keep a certain type of expenditure for a personal use, it won't be shared.
                    </p>
                    <p>Spendee is an app to provide an one-way finance system so that users can instantly check their whole financial state as a single source.
                    But, it tries to carry out multiple purposes for users, I feel it's too bulky and complex, and is quite distracting.</p>
                    <div className="container">
                        <div class="row justify-content-center">
                            <p className="col-8">
                                <img className="mobile__img" src={Wallets} width="300" alt="Spendee main wallets" />
                            </p>
                        </div>
                    </div>
                </section>
            </Row>
            <Row className="p-3">
                <h5 className="font-weight-bold">Wallet</h5>
                <section>
                    <p>If a user taps a wallet from the home menu, there is a smooth screen transition animation to the wallet screen. Each wallet has its own name given by a user.
                    Each wallet can have different income sources and its expenditures separately.
                    Perhaps some people prefer to micromanage their individual income resources.</p>
                    <p>But, again this makes me question the value of this approach and I am going to compare and contrast this with Pockie.
                    There is a calendar icon on the top of right-hand side which lets users choose the scope of the period of the wallet.
                    </p>
                    <div className="container">
                        <div class="row justify-content-center">
                            <p className="col-8">
                                <img src={UserWallet} className="mobile__img" width="300" alt="Spendee user wallet" />
                            </p>
                        </div>
                    </div>
                </section>
            </Row>
            <Row className="p-3">
                <h5 className="font-weight-bold">Transaction</h5>
                <section>
                    <p>This has a similar feature and design to Pockie. On the bottom tab menu, There is a big green plus icon which leads a user to this transaction screen.
                    </p>
                    <p>A user records the detail of the transaction and the type (whether it is an expense or an income) and the amount of money manually.</p>
                    <div className="container">
                        <div class="row align-items-center">
                            <p className="col">
                                <img src={Transaction1} className="mobile__img" width="300" alt="Spendee transaction1" />
                            </p>
                            <p className="col">
                                <img src={Transaction2} className="mobile__img" width="300" alt="Spendee transaction2" />
                            </p>
                        </div>
                    </div>
                </section>
            </Row>
            <Row className="p-3">
                <h5 className="font-weight-bold">Overview</h5>
                <section>
                    <p>This is an overview of the wallet. Spendee also has used data visualisation to show users' data in a more intuitive manner.</p>
                    <div className="container">
                        <div class="row justify-content-center">
                            <p className="col-8">
                                <img src={Overview} className="mobile__img" width="300" alt="Spendee Overview" />
                            </p>
                        </div>
                    </div>
                </section>
            </Row>
        </Layout>
    );
}