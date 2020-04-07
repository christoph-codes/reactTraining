import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './AssignmentThree.scss';
import Toolbar from './Layout/toolbar/Toolbar';
import BurgerBuilder from './containers/burgerBuilder/BurgerBuilder';
import Checkout from './containers/checkout/Checkout';
import Orders from './containers/orders/Orders';
import Layout from './Layout/Layout';
import FourOhFour from '../fourOhFour/FourOhFour';

export default function AssignmentThree(props) {
    return (
        <div className="AssignmentThree">
            <Toolbar />
                <Layout>
                    <Switch>
                        <Route exact path='/assignment3/burger-builder' component={BurgerBuilder} />
                        <Route exact path='/assignment3/orders' component={Orders} />
                        <Route exact path='/assignment3/checkout' component={Checkout} />
                        <Redirect to='/assignment3/burger-builder' />
                        <Route component={FourOhFour} />
                    </Switch>
                </Layout>
            
        </div>
    )
}