import * as ActionTypes from '../constants/constants';

export default function action( state = {}, action) {
    switch(action.type) {
        case ActionTypes.FETCH_DOCTORS:
            return {
                ...state,
                provider: action.payload.data
            }
        case ActionTypes.FETCH_BY_SPECIALTY:
        console.log({action})
            return {
                ...state,
                specialty: action.payload
            }
        default: 
            return state
    }
}