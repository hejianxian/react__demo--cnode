import React from 'react';
import PropTypes from 'prop-types'

const List = ({topics}) => (
    <ul>
      {topics.map((topic, i) => (
        <li key={i}>{topic.title}</li>
      ))}
    </ul>
)

List.propTypes = {
  topics: PropTypes.array.isRequired
};

export default List;
