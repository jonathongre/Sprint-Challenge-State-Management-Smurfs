import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteSmurf, updateSmurf } from "../actions";

const Smurf = props => {

    const [smurf, editSmurf] = useState(props.smurf)
    const [edit, setEdit] = useState(false);

    const toggleEdit = () => {
        setEdit(!edit)
    }

    const editSmurfHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        editSmurf({ ...smurf, [name]: value })
    }

    return (
        <div key={props.smurf.id}>
            <h1>{props.smurf.name}</h1>
            <h3>Age: {props.smurf.age} years</h3>
            <h3>Height: {props.smurf.height}</h3>
            <button onClick={() => props.deleteSmurf(props.smurf.id)}>Delete</button>
            <button onClick={toggleEdit}>Edit</button>
            {edit ? <form onSubmit={(e) => {
                e.preventDefault()
                props.updateSmurf(smurf)
                toggleEdit();
            }}><input type='text' name='name' value={smurf.name} onChange={(e) => editSmurfHandler(e)} placeholder='Name' />
                <input type='number' name='age' value={smurf.age} onChange={(e) => editSmurfHandler(e)} placeholder='Age' />
                <input type='text' name='height' value={smurf.height} onChange={(e) => editSmurfHandler(e)} placeholder='Height' />
                <button>Finish Editing</button> </form> : null}
        </div>
    )
}

export default connect(() => {},{deleteSmurf, updateSmurf}) (Smurf);