import {
    FETFCH_POSTS_SUCCESS,
    FETCH_INDIVIDUAL_POST_SUCCESS,
    ON_SHOW_LOADER,
    SHOW_MESSAGE,
    HIDE_MESSAGE
  } from "../constants/ActionTypes";
  
  const INIT_STATE = {
    loader: false,
    posts: null,
    individualPostData: null,
    alertMessage: "",
    showMessage: false
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case FETFCH_POSTS_SUCCESS: {
        return {
          ...state,
          loader: false,
          individualPostData: null,
          posts: action.payload,
          showMessage: false,
          alertMessage: ""
        };
      }

      case FETCH_INDIVIDUAL_POST_SUCCESS: {
        return {
          ...state,
          posts: null,
          loader: false,
          individualPostData: action.payload
        };
      }
 
      case ON_SHOW_LOADER: {
        return {
          ...state,
          loader: true
        };
      }
      case SHOW_MESSAGE: {
        return {
          ...state,
          loader: false,
          alertMessage: action.payload,
          showMessage: true
        };
      }
      case HIDE_MESSAGE: {
        return {
          ...state,
          loader: false,
          alertMessage: "",
          showMessage: false
        };
      }

      default:
        return state;
    }
  };
  