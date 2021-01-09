import { all, call, put, takeEvery } from 'redux-saga/effects';
import { fetchPostsSuccess, fetchIndividualPostSuccess, showMessage } from '../actions/Post';
import { FETCH_INDIVIDUAL_POST, FETCH_POSTS } from '../constants/ActionTypes';
import axios from 'axios';

const getPosts = async () => {
	return await axios
		.get(`${process.env.REACT_APP_API_URL}/index.php/wp-json/wp/v2/posts`)
		.then((response) => response)
		.catch((error) => error);
};

const getIndividualPost = async (params) => {
	return await axios
		.get(`${process.env.REACT_APP_API_URL}/index.php/wp-json/wp/v2/posts/${params.id}`)
		.then((response) => response)
		.catch((error) => error);
  };



function* fetchPosts(obj) {
	try {
		const fetchPostResponse = yield call(getPosts, obj.payload);
		if (fetchPostResponse.message) {
			if (fetchPostResponse.response) {
				yield put(showMessage(fetchPostResponse.response));
			} else {
				yield put(showMessage(fetchPostResponse.message));
			}
		} else {
			yield put(fetchPostsSuccess(fetchPostResponse));
		}
	} catch (error) {
		yield put(showMessage(error));
	}
}

function* fetchIndividualPostRequest(data) {
	try {
		const fetchedPostResponse = yield call(getIndividualPost, data.payload);
		if (fetchedPostResponse.message) {
			if (fetchedPostResponse.response) {
				yield put(showMessage(fetchedPostResponse.response));
			} else {
				yield put(showMessage(fetchedPostResponse.message));
			}
		} else {
			fetchedPostResponse.data.page = data.payload.page;
			yield put(fetchIndividualPostSuccess(fetchedPostResponse));
		}
	} catch (error) {
		yield put(showMessage(error));
	}
}

export default function* rootSaga() {
	yield all([takeEvery(FETCH_POSTS, fetchPosts), takeEvery(FETCH_INDIVIDUAL_POST, fetchIndividualPostRequest)]);
}
