import * as ActionTypes from '../constants/constants';
import { API_KEY, URL_DR } from '../env';
import axios from 'axios';

export const fetchDoctors = (location = 'fl', query = '') => async dispatch => {
    try {
        const response = await axios.get(`${URL_DR}/doctors?query=${query}location=${location}&skip=2&limit=12&user_key=${API_KEY}`)
     dispatch({ type: ActionTypes.FETCH_DOCTORS, payload: response.data })
    } catch(error) {
        throw new Error('fetchDoctors error')
    }
}
