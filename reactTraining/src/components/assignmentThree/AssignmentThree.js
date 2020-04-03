import React from 'react';
import './AssignmentThree.scss';
import Layout from './Layout/Layout';
import Toolbar from './Layout/toolbar/Toolbar';
import BurgerBuilder from './containers/burgerBuilder/BurgerBuilder';

export default function AssignmentThree() {
    return (
        <div className="AssignmentThree">
            <h1>Build a Burger</h1>
            <Toolbar />
            <Layout>
                <BurgerBuilder />
            </Layout>
        </div>
    )
}