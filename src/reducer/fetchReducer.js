import * as ActionTypes from '../constants/constants';

export default function action( state = {}, action) {
    switch(action.type) {
        case ActionTypes.FETCH_DOCTORS:
            return {
                ...state,
                provider: action.payload.data
            }
        case ActionTypes.FETCH_LOCATIONS:
            return {
                ...state,
                lat: action.lat,
                lon: action.lon
            }
        default: 
            return state
    }
}