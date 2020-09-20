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
        className={ this.props.clickable ? 'button-container' : 'button-container disabled'}
        onClick={this.onClickHundler}
        disabled={!this.props.clickable}
      >
        {this.props.children}
      </button>
    )
  }
}

export default Button;