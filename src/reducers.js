import { combineReducers } from 'redux'
import { getTopicsByTag, listTag } from './containers/ListPage/reducers';

const rootReducers = combineReducers({
  getTopicsByTag,
  listTag
});

export default rootReducers;
