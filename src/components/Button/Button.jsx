import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.onClickHundler = this.onClickHundler.bind(this);
  }

  onClickHundler() {
    if(typeof this.props.onClickHundler === 'function') {
      this.props.onClickHundler()
    }
  }

  render() {
    return(
      <button 
        className="button-container"
        onClick={this.onClickHundler}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;