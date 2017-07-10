import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import Navigator from '../../components/Navigator';
import List from './List';

import './index.less';

import {
  saveListTag,
  fetchPostsIfNeeded
} from './actions';

class HomePage extends React.Component {

  static propTypes = {
    topics: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    tag: PropTypes.string.isRequired
  }

  componentDidMount() {
    const { dispatch, tag } = this.props;
    dispatch(saveListTag(tag));
    dispatch(fetchPostsIfNeeded(tag));
  }

  render() {
    const { topics, fetching } = this.props;
    const isEmpty = topics.length === 0;

    return (
      <div className="list">
        <Navigator></Navigator>
        <div className="list__container">
          { fetching && <p className="warning">Loading...</p> }
          { (isEmpty && !fetching) && <p className="warning">没有任何内容...</p>}
          <List topics={topics}></List>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { getTopicsByTag, listTag } = state;
  const { topics, fetching } = getTopicsByTag[listTag.tag] || {
    topics: [],
    fetching: true
  };
  return {
    topics,
    fetching
  }
}

const AllTopics = connect(
  mapStateToProps
)(HomePage);


export default AllTopics;
