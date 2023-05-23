import React, { useState } from "react";

const Input = ({ onSendMessage }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      alert("Empty message? Really?");
      return;
    }

    setText("");
    onSendMessage(text);
  };

  return (
    <div className="Input">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={text}
          type="text"
          placeholder="Lets Chat ..."
          autoFocus={true}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Input;