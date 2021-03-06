import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleComment } from '../actions/';

class CommentListItem extends Component {
  toggle() {
    const { _id } = this.props;
    this.props.toggleComment({_id});
  }

  getClassName(minimized) {
    return 'comment ' + (minimized ? 'minimized' : '');     
  }
  
  getIconClassName(minimized) {
    return 'fa ' + (minimized ? 'fa-arrow-circle-left' : 'fa-arrow-circle-down');     
  }  

  checkLineBreak(minimized) {
    return minimized ? ' ' : <br/>;
  }

  render() {
    const { title, message, minimized } = this.props;
    const className = this.getClassName(minimized);
    const iconClassName = this.getIconClassName(minimized);

    return (
      <li onClick={this.toggle.bind(this)}>
        <div className={className}>
          <strong>{title}</strong>
          {this.checkLineBreak(minimized)}
          {message}
        </div>
        <i className={iconClassName} aria-hidden="true"></i>
      </li>
    );
  }
}

export default connect(null, { toggleComment })(CommentListItem);