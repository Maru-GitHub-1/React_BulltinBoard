import React from 'react';
import Message from '../Message/Message'

class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.roopForItem = this.roopForItem.bind(this);
  }

  roopForItem() {
    // {message} -> propsの中のmessageを取得
    const { messages } = this.props;
    const messageList = messages.map((message, index) => {
      return (
        <Message key={index} date={message.date} body={message.body}/>
      )
    });
    return messageList;
  }

  render() {
    return this.roopForItem();
  }
}

// const MessageList = (props) => {
//   const { messages } = props;
//   const messageList = messages.map((message, index) => {
//     return (
//         <Message key={index} date={message.date} body={message.body} />
//     );
//   });

//   return messageList
// }

export default MessageList;