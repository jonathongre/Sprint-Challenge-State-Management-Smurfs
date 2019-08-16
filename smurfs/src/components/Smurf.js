import React from 'react';
import { connect } from 'react-redux';
import {deleteSmurf } from "../actions";

const Smurf = props => {
    return (
        <div key={props.smurf.id}>
            <h1>{props.smurf.name}</h1>
            <h3>Age: {props.smurf.age} years</h3>
            <h3>Height: {props.smurf.height}</h3>
            <button onClick={() => props.deleteSmurf(props.smurf.id)}>Delete</button>
        </div>
    )
}

export default connect(() => {},{deleteSmurf}) (Smurf);