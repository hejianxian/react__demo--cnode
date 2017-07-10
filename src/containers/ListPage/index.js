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
    dispatch: PropTypes.func.isRequired,
    tag: PropTypes.string.isRequired
  }

  componentDidMount() {
    const { dispatch, tag } = this.props;
    dispatch(saveListTag(tag));
    dispatch(fetchPostsIfNeeded(tag));
  }

  render() {
    const { topics } = this.props;

    return (
      <div className="list">
        <Navigator></Navigator>
        <div className="list__container">
          <List topics={topics}></List>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { getTopicsByTag, listTag } = state;
  const { topics } = getTopicsByTag[listTag.tag] || {
    topics: []
  };
  return {
    topics: topics
  }
}

const AllTopics = connect(
  mapStateToProps
)(HomePage);


export default AllTopics;
