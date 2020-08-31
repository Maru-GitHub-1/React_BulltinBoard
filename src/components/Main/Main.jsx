import React from 'react';
import TextBox from '../TextBox/TextBox';
import MessageList from '../MessageList/MessageList';
import '../Main/Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    }
    
    this.addMessage = this.addMessage.bind(this);
    this.reversedMessage = this.reversedMessage.bind(this);
  }

  addMessage(message) {
    this.setState({
      messages: [
        ...this.state.messages,
        message
      ]
    })
  }

  reversedMessage(messages) {
    return messages.slice().reverse();
  }

  render() {
    return (
      <main className="main-container">
        <TextBox onSubmit={this.addMessage}/>
        <div className="devider"></div>
          <MessageList messages={this.reversedMessage(this.state.messages)}/>
      </main>
    )
  }
}

export default Main;