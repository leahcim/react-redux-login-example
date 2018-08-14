import {
    GET_DATA,
    RECEIVE_DATA
} from './actionTypes';

import { load, save, remove } from './persisterActionCreators';
import { CREDENTIALS } from '../constants';

export const loadCredentials = () => load(CREDENTIALS);
export const saveCredentials = (credentials) => save(CREDENTIALS, credentials);
export const deleteCredentials = () => remove(CREDENTIALS);

export const getData = (credentials) => ({
    type: GET_DATA,
    credentials
});

export const receiveData = (data) => ({
    type: RECEIVE_DATA,
    data
});