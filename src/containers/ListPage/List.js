import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const List = ({topics}) => (
    <ul>
      {topics.map((topic, i) => (
        <Item key={i} {...topic}></Item>
      ))}
    </ul>
)

List.propTypes = {
  topics: PropTypes.array.isRequired
};

export default List;
