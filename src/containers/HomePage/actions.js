import {
  BEFORE_FETCH,
  FETCH_SUCCESS,
  INVALIDATE_TOPICS
} from './constants';

export const beforeFetch = (tag) => {
  return {
    type: BEFORE_FETCH,
    tag
  }
}

export const receiveFetch = (tag, json) => {
  return {
    type: FETCH_SUCCESS,
    tag,
    topics: json,
    receivedAt: new Date()
  }
}

export const invalidateTopics = (tag) => {
  return {
    type: INVALIDATE_TOPICS,
    tag
  }
}

export const getTopicsByType = tag => dispatch => {
  dispatch(beforeFetch(tag));
  return fetch('https://cnodejs.org/api/v1/topics')
    .then(response => response.json())
    .then(json => dispatch(receiveFetch(tag, json.data)))
}

const shouldFetchPosts = (state, tag) => {
  const topics = state.getTopicsByTag[tag];
  if (!topics) {
    return true;
  }
  if (topics.isFetching) {
    return false;
  }
  return topics.didInvalidate;
}

export const fetchPostsIfNeeded = tag => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), tag)) {
    return dispatch(getTopicsByType(tag));
  }
}
