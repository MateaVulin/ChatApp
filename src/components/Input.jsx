import React, { Component } from "react";

class Input extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    this.setState({ text: "" });
    this.props.onSendMessage(text);
  };

  render() {
    const { text } = this.state;

    return (
      <div className="Input">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={text}
            type="text"
            placeholder="Tell me about your day..."
            autoFocus
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default Input;