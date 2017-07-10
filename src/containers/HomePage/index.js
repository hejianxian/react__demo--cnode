import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import Navigator from '../../components/Navigator';
import List from './List';

import './index.less';

import {
  fetchPostsIfNeeded
} from './actions';

class HomePage extends React.Component {

  static propTypes = {
    topics: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostsIfNeeded('all'));
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
  const { getTopicsByTag } = state;
  const { topics } = getTopicsByTag['all'] || {
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
