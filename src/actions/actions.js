import * as ActionTypes from '../constants/constants';
import { API_KEY, URL_DR } from '../env';
import axios from 'axios';

export const fetchDoctors = () => async dispatch => {
    try {
        const response = await axios.get(`${URL_DR}/doctors?location=37.773,-122.413,100&skip=2&limit=12&user_key=${API_KEY}`)
        return dispatch({ type: ActionTypes.FETCH_DOCTORS, payload: response.data })
    } catch(error) {
        throw new Error
    }
}
