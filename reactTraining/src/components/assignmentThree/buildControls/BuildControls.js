import React from 'react';
import './BuildControls.scss'

import BuildControl from './buildControl/BuildControl';

const controls = [
    { label: 'Lettuce', type: 'lettuce'},
    { label: 'Tomatos', type: 'tomatos'},
    { label: 'Pickles', type: 'pickles'},
    { label: 'Onions', type: 'onions'},
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
                ingredientAdded={() => props.ingredientAdded(ctl.type)}
                ingredientRemoved={() => props.ingredientRemoved(ctl.type)}
                disabled={props.disabled[ctl.type]}
                />
            ))}
        </div>
    )
}