import React from 'react';
import Button from '../Button/Button'
import MessageModel from '../../models/Message';
import './TextBox.css';

class TextBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      canPost: true
    }

    this.handleChange = this.handleChange.bind(this);
    this.sendBodyToParent = this.sendBodyToParent.bind(this);
  }

  handleChange(event) {
    // inputのnameプロパティを指定することでstateのbodyを指している
    const field = event.target.name;
    
    this.setState({
      // 変数名は[]でプロパティに
      [field]: event.target.value
    })
  }

  // firebaseとreq,resのやりとりをするため非同期式にした
  async sendBodyToParent() {

    // MessageModel.save内で同処理実装
    // const body = this.state.body.trim();
    // if (!body) {
    //   alert('何も入力されていません');
    //   return;
    // }
    this.setState({
      canPost: false
    })
    try {
      const newMessage = await MessageModel.save({
        body: this.state.body,
        channelId: this.props.channelId
      });
      if (typeof this.props.onSubmit === 'function') {
        this.props.onSubmit(newMessage);
      }
      this.setState({
        body: ''
      })
    } catch (error) {
      // error.messageはnew Errorの引数
      alert(error.message)
    }

    this.setState({
      canPost: true
    })
  }

  render() {
    return (
      <div className="textbox-container">
          <textarea
            placeholder="ここに入力"
            className="textbox-input"
            name="body"
            cols="30"
            rows="15"
            value={this.state.body}
            onChange={this.handleChange}
          ></textarea>
        <div className="textbox-button">
        <Button 
          onClickHundler={this.sendBodyToParent}
          clickable={this.state.canPost}
        >投稿する</Button>
        </div>
      </div>
    );
  }
}

export default TextBox;