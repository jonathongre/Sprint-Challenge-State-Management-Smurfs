import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
    ADD_SMURF,
    DELETE_SMURF,
    UPDATE_SMURF,
    UPDATE_SMURF_FAILED,
    UPDATE_SMURF_SUCCESS
} from '../actions'

export const initialState = {
    smurfs:[],
    fetching: false,
    addingSmurf: false,
    deletingSmurf:false,
    error: ''
}

export const reducer =(state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return{...state, fetching:true};
        case ADD_SMURF:
            return{...state, fetching:true};
        case DELETE_SMURF:
            return{smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload)};    
        case FETCH_SMURF_SUCCESS:
            return{...state, smurfs:action.payload, fetching:false};
        case FETCH_SMURF_FAILURE:
            return{...state, error:action.payload, fetching:false};
            case UPDATE_SMURF: 
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case UPDATE_SMURF_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: [...action.payload]
            }
        case UPDATE_SMURF_FAILED: 
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        
        default: 
        return state
    }
}