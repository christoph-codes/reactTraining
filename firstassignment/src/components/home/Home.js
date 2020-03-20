import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

export default function Home() {
    return (
        <div className="Home">
            <div className="content">
                <h1 className="page-header">Welcome to Christopher's React Training Pages</h1>
                <p>You will find all of the course assignments from Maximilian Schwarzmüller's 45 hour React Complete Guide Udemy course that covers Hooks, React Router, Redux, and more!</p>
                <Link className="btn prime" to="/assignment1">Go to the first assignment</Link>
            </div>
        </div>
    )
}