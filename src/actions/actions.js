import * as ActionTypes from '../constants/constants';
// import { API_KEY, URL_DR } from '../env';
import axios from 'axios';

const API_KEY = 'a1a6de68c548552aacce3febcf7b6997'
const URL_DR = 'https://api.betterdoctor.com/2016-03-01'

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
