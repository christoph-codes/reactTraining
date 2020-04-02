import React, { useState } from 'react';
import './NewComment.scss'
import axios from 'axios';

export default function NewComment(props) {
    const [formShow,setFormShow] = useState(false);
    const [commentName, setCommentName] = useState('');
    const [commentContent,setCommentContent] = useState('');
    const [commentEmail,setCommentEmail] = useState('');
    const [feedback,setFeedback] = useState(null);

    const sendComment = () => {
        if(commentName && commentContent && commentEmail) {
            // console.log(commentName, commentContent, commentEmail);
            const comment = {
                name: commentName,
                body: commentContent,
                email: commentEmail,
                author: 'Christoph'
            }
            axios.post('https://jsonplaceholder.typicode.com/comments/', comment)
            .then(response => {
                console.log(response);
            })
        } else {
            setFeedback('All Fields Must Be Filled Out');
        }
        
    }

    const toggleForm = () => {
        setFormShow(!formShow);
    }

    return (
        <div className='NewComment'>
            {!formShow && <button className="btn" onClick={toggleForm}>Add New Comment</button>}
            {formShow &&
            <div className="new-comment-form">
                <h2>New Comment</h2>
                <input type="text" name="name" onChange={ (e) => setCommentName(e.target.value) } value={commentName} placeholder="Comment Name" />
                <input type="text" name="email" onChange={ (e) => setCommentEmail(e.target.value) } value={commentEmail} placeholder="User Email" />
                <textarea type="text" name="content" onChange={ (e) => setCommentContent(e.target.value) } value={commentContent} placeholder="Comment Content" />
                {feedback && <p className="feedback">{feedback}</p>}
                <button className="btn" onClick={sendComment}>Submit</button>
                <button className="btn cancel" onClick={toggleForm}>Cancel</button>
            </div>
            }
        </div>
    )
}