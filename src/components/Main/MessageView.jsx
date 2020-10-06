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
    await this.fetchMessages();
  }

  async componentDidUpdate(prevProps) {
    // 典型的な使い方(props を比較することを忘れないでください)
    if (this.props.match.params.channelId !== prevProps.match.params.channelId) {
      this.setState({
        initialLoaded: false,
        messages: []
      })
      await this.fetchMessages();
    }
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
    // (① console.log(this.props))
    // matchの存在を確認
    // matchでid取得
    const params = this.props.match;

    // idがnumberならparseintをする
    const id = params.params.channelId;

    let messages = [];
    try {
      messages = await MessageModel.fetchMessages(id);
    } catch (error) {
      // 読み込み失敗など、何かしらのエラーが発生したら
      // ユーザーにデータの取得が失敗したことを知らせる
      alert(error.message);
    }

    this.setState({
      messages: messages,
      initialLoaded: true
    })
  }

  sendReverseMessages(messages) {
    //reverseで投稿したら下ではなく上に追加される
    return messages.slice().reverse()
  }

  render() {
    return (
      <main className="main-container">
        <TextBox 
          onSubmit={this.addMessage}
          channelId={this.props.match.params.channelId}
        />
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