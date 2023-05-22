import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ text: "" });
    this.props.onSendMessage(this.state.text);
  };

  render() {
    return (
      <div className="Input">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
            type="text"
            placeholder="Talk to me ..."
            autoFocus={true}
          />
          <button>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    );
  }
}

export default Input;