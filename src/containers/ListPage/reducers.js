import {
  LIST_TAG,
  BEFORE_FETCH,
  FETCH_SUCCESS,
  INVALIDATE_TOPICS
} from './constants';

const getTopics = (state = {
  fetching: false,
  topics: [],
  didInvalidate: false
}, action) => {
  switch (action.type) {
    case BEFORE_FETCH:
      return {
        ...state,
        fetching: true,
        didInvalidate: false
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        didInvalidate: false,
        topics: action.topics,
        lastUpdated: action.receivedAt
      }
    case INVALIDATE_TOPICS:
      return {
        ...state,
        didInvalidate: true
      }
    default:
      return state;
  }
}

export const getTopicsByTag = (state = {}, action) => {
  switch(action.type) {
    case BEFORE_FETCH:
    case FETCH_SUCCESS:
    case INVALIDATE_TOPICS:
      return {
        ...state,
        [action.tag]: getTopics(state[action.tag], action)
      }
    default:
      return state;
  }
}

export const listTag = (state = { tag: 'all' }, action) => {
  switch(action.type) {
    case LIST_TAG:
      return {
        ...state,
        tag: action.tag
      }
    default:
      return state;
  }
}
