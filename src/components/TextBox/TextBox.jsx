import React from 'react';
import Button from '../Button/Button'
import './TextBox.css';

class TextBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.sendBodyToParent = this.sendBodyToParent.bind(this);
    this.createMessage = this.createMessage.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;

    this.setState({
      [field]: event.target.value
    })
  }

  sendBodyToParent() {
    const body = this.state.body.trim();
    if (!body) {
      alert('何も入力されていません');
      return;
    }

    const newMessage = this.createMessage();

    if (typeof this.props.onSubmit === 'function') {
      this.props.onSubmit(newMessage);
    }

    this.setState({
      body: ''
    })
  }

  createMessage() {
    return {
      date: new Date().toLocaleString(),
      body: this.state.body
    }
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
        <Button onClickHundler={this.sendBodyToParent}>投稿する</Button>
        </div>
      </div>
    );
  }
}

export default TextBox;