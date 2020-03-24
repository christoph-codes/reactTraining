import React from 'react';
import './BuildControls.scss'

import BuildControl from './buildControl/BuildControl';

const controls = [
    { label: 'Lettuce', type: 'lettuce'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
]

export default function BuildControls(props) {
    return (
        <div className='BuildControls'>
            {controls.map((ctl) => (
                <BuildControl 
                key={ctl.label} 
                label={ctl.label} 
                ingredientAdded={props.ingredientAdded}
                />
            ))}
        </div>
    )
}