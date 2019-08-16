import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
    ADD_SMURF,
} from '../actions'

export const initialState = {
    smurfs:[],
    fetching: false,
    addingSmurf: false,
    error: ''
}

export const reducer =(state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return{...state, fetching:true};
        case ADD_SMURF:
            return{...state, fetching:true};
        case FETCH_SMURF_SUCCESS:
            return{...state, smurfs:action.payload, fetching:false};
        case FETCH_SMURF_FAILURE:
            return{...state, error:action.payload, fetching:false};
        
        default: 
        return state
    }
}