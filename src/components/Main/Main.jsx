import React from 'react';
import TextBox from '../TextBox/TextBox';
import MessageList from '../MessageList/MessageList';
import '../Main/Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {date: 'datedatedate', body: 'bodybodybody'},
        {date: 'datedatedate', body: 'bodybodybody'},
        {date: 'datedatedate', body: 'bodybodybody'},
        {date: 'datedatedate', body: 'bodybodybody'},
        {date: 'datedatedate', body: 'bodybodybody'},
      ]
    }
  }

  render() {
    return (
      <main className="main-container">
        <TextBox />
        <div className="devider"></div>
          <MessageList messages={this.state.messages}/>
      </main>
    )
  }
}

export default Main;