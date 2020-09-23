import React from 'react';
import TextBox from '../TextBox/TextBox';
import MessageList from '../MessageList/MessageList';
import MessageModel from '../../models/Message';
import Spinner from '../Spinner/Spinner';
import '../Main/MessageView.css';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      initialLoaded: false
    }
    
    this.addMessage = this.addMessage.bind(this);
    this.sendReverseMessages = this.sendReverseMessages.bind(this);
  }

  async componentDidMount() {
    const messages = await this.fetchMessages();
    this.setState({
      messages: messages,
      initialLoaded: true
    })
  }

  addMessage(message) {
    this.setState({
      messages: [
        ...this.state.messages,
        message
      ]
    });
  }

  async fetchMessages() {
    let messages = [];
    try {
      messages = await MessageModel.fetchMessages();
    } catch (error) {
      // 読み込み失敗など、何かしらのエラーが発生したら
      // ユーザーにデータの取得が失敗したことを知らせる
      alert(error.message);
    }

    return messages;
  }

  sendReverseMessages(messages) {
    //reverseで投稿したら下ではなく上に追加される
    return messages.slice().reverse()
  }

  render() {
    return (
      <main className="main-container">
        <TextBox onSubmit={this.addMessage}/>
        <div className="devider"></div>
        <div>
          { this.state.initialLoaded ? null : <Spinner />}
        </div>
        <p className="no-messages">
          { this.state.messages.length === 0 && this.state.initialLoaded ? "データ0件" : null }
        </p>
        <MessageList messages={this.sendReverseMessages(this.state.messages)}/>
      </main>
    )
  }
}

export default Main;