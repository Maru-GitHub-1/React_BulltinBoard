import React from 'react';
import './Message.css';

class Message extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    return(
      <div className="message">
        <div className="message-date">{this.props.children}</div>
        <p className="message-text">{this.props.children}</p>
      </div>
    )
  }
}

export default Message;