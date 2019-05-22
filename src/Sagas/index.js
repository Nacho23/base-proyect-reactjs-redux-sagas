import { fork } from 'redux-saga/effects'
import API from '../Services/Api'
//import { watchAuth } from './LoginSagas';

const api = API.create(process.env.REACT_APP_API_URL);

export default function * root () {
    //yield fork(watchAuth, api);
}
