import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './AssignmentThree.scss';
import Layout from './Layout/Layout';
import Toolbar from './Layout/toolbar/Toolbar';
import BurgerBuilder from './containers/burgerBuilder/BurgerBuilder';
import Orders from './containers/orders/Orders';

export default function AssignmentThree(props) {
    return (
        <div className="AssignmentThree">
            <h1>Build a Burger</h1>
            <Toolbar />
            <Layout>
                <Switch>
                    <Route to={props.match.url + '/burger-builder'} component={BurgerBuilder} />
                    <Route to={props.match.url + '/orders'} component={Orders} />
                </Switch>
                {/* <BurgerBuilder /> */}
            </Layout>
        </div>
    )
}