import axios from 'axios';
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const DELETE_SMURF='DELETE_SMURF';

export const fetchSmurfs = () => dispatch =>{
    dispatch({type:FETCH_SMURF_START});
    axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
            dispatch({ type:FETCH_SMURF_SUCCESS, payload:res.data});
        })
        .catch(err => {
            dispatch({type: FETCH_SMURF_FAILURE, payload:err})
        })
    }

export const addSmurf = (index) => dispatch =>{
    dispatch({type:ADD_SMURF})
    axios
        .post(`http://localhost:3333/smurfs`, index)
        .then(res => {
            dispatch({type:FETCH_SMURF_SUCCESS, payload : res.data});
            return true
        })
        .catch (err=>{
            dispatch({type: FETCH_SMURF_FAILURE})
        })
    }

export const deleteSmurf = (id) => (dispatch) => {
        dispatch ({type: DELETE_SMURF})
        axios
            .delete (`http://localhost:3333/smurfs/${id}`)
            .then (res => {
                dispatch({type: FETCH_SMURF_SUCCESS, payload : res.data});
                return true
        })
            .catch ( err => {
                dispatch({type: FETCH_SMURF_FAILURE, payload : err})
                return false
        })
      }