import React from 'react';
import './Message.css';

class Message extends React.Component {

  render() {
    return(
      <div className="message">
        <div className="message-date">{this.props.date}</div>
        <p className="message-text">{this.props.body}</p>
      </div>
    )
  }
}

export default Message;