import React from 'react';
import './AssignmentFour.scss';
import Comments from './components/comments/Comments';

export default function AssignmentFour(props) {
    return (
        <div className='AssignmentFour'>
            <h1 className="page-header">Comments</h1>
            <Comments/>
            
        </div>
    )
}