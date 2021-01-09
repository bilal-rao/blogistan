import {all} from 'redux-saga/effects';
import postSagas from "./Post";

export default function* rootSaga() {
    yield all([
        postSagas()
    ]);
}
