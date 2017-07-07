import { combineReducers } from 'redux'
import { getTopicsByTag } from './containers/HomePage/reducers';

const rootReducers = combineReducers({
  getTopicsByTag
});

export default rootReducers;
