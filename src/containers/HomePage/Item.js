import React from 'react';
import PropTypes from 'prop-types';

export default class Item extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired,
    create_at: PropTypes.string.isRequired,
    reply_count: PropTypes.number.isRequired,
    visit_count: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      publisher: this.props.author.loginname
    };
  }

  render() {
    return (
      <li>
        <div className="topic-item">
          <h3>{this.props.title}</h3>
          <p>
            <span>{this.state.publisher}</span>
            <time>{this.props.create_at}</time>
            <span>{this.props.reply_count}/{this.props.visit_count}</span>
          </p>
        </div>
      </li>
    )
  }
}
