import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import Post from './Post';

export default (history) => combineReducers({
  router: connectRouter(history),
  postData: Post
});
