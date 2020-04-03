
import React from 'react';
import Home from '../home/Home';
import AssignmentOne from '../assignmentOne/AssignmentOne';
import AssignmentThree from '../assignmentThree/AssignmentThree';
import AssignmentTwo from '../assignmentTwo/AssignmentTwo';
import AssignmentFour from '../assignmentFour/AssignmentFour';
import BurgerBuilder from '../assignmentThree/containers/burgerBuilder/BurgerBuilder';
import Orders from '../assignmentThree/containers/orders/Orders';

const Routes = () => [
    {
        path: '/',
        component: Home
    },
    {
        path: '/assignment1',
        component: AssignmentOne,
    },
    {
        path: '/assignment2',
        component: AssignmentTwo,
    },
    {
        path: '/assignment3',
        component: AssignmentThree,
        children: [
            {
                path: '/home',
                component: BurgerBuilderHome
            },
            {
                path: '/burger-builder',
                component: BurgerBuilder,
            },
            {
                path: '/orders',
                component: Orders
            }
        ]
    },
    {
        path: '/assignment4',
        component: AssignmentFour,
    }
]

export default Routes;