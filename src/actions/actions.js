import * as ActionTypes from '../constants/constants';
// import { API_KEY, URL_DR } from '../env';
import axios from 'axios';
const FETCH_DOCTORS = 'FETCH_DOCTORS';
const FETCH_LOCATIONS = 'FETCH_LOCATIONS';
export const fetchDoctors = (lat = '37.773' , lon = '-122.413') => async dispatch => {
    try {
        const response = await axios.get(`${URL_DR}/doctors?location=${lat},${lon},100&skip=2&limit=12&user_key=${API_KEY}`)
        return dispatch({ type: ActionTypes.FETCH_DOCTORS, payload: response.data })
    } catch(error) {
        throw new Error
    }
}

export const fetchLocation = (lat, lon) => {
    return {
        type: ActionTypes.FETCH_LOCATIONS,
        lat,
        lon
    }
}
