import {
	FETCH_POSTS,
	FETFCH_POSTS_SUCCESS,
	FETCH_INDIVIDUAL_POST,
	FETCH_INDIVIDUAL_POST_SUCCESS,
	SHOW_MESSAGE,
	HIDE_MESSAGE,
	ON_SHOW_LOADER,
} from '../constants/ActionTypes';

export const fetchPosts = (payload) => {
	return {
		type: FETCH_POSTS,
		payload,
	};
};

export const fetchPostsSuccess = (payload) => {
	return {
		type: FETFCH_POSTS_SUCCESS,
		payload,
	};
};

export const fetchIndividualPost = (payload) => {
	return {
		type: FETCH_INDIVIDUAL_POST,
		payload,
	};
};

export const fetchIndividualPostSuccess = (payload) => {
	return {
		type: FETCH_INDIVIDUAL_POST_SUCCESS,
		payload,
	};
};

export const showLoader = (payload) => {
	return {
		type: ON_SHOW_LOADER,
		payload,
	};
};

export const hideMessage = (payload) => {
	return {
		type: HIDE_MESSAGE,
		payload,
	};
};

export const showMessage = (payload) => {
	return {
		type: SHOW_MESSAGE,
		payload,
	};
};
