import React, { Component } from "react";
import Messages from "./components/Messages";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import "./App.css";

function randomName() {
const adjectives = ["živahno", "zalutalo", "otvoreno", "napuhani", "putujući", "zalutali", "bijeli", "žuti", "uznemireni"];
const nouns = ["sunce", "povjetarac", "leptir", "balon", "mjesec", "zvjezdica", "lolipop", "osmijeh", "pogled", "ormar"];
const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
const noun = nouns[Math.floor(Math.random() * nouns.length)];
return adjective + noun;
}

function randomColor() {
return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

class App extends Component {
constructor() {
super();
this.state = {
messages: [],
member: {
username: randomName(),
color: randomColor(),
},
};
this.drone = new window.Scaledrone(process.env.REACT_APP_SCALEDRONE_CHANNEL_ID, {
data: this.state.member,
});
this.drone.on("open", (error) => {
if (error) {
return console.error(error);
}
const member = { ...this.state.member };
member.id = this.drone.clientId;
this.setState({ member });
});
const room = this.drone.subscribe("observable-room");
room.on("data", (data, member) => {
const messages = [...this.state.messages, { member, text: data }];
this.setState({ messages });
});
}

onSendMessage = (message) => {
this.drone.publish({
room: "observable-room",
message,
});
};

render() {
const { messages, member } = this.state;
return (
<div className="App">
<div className="App-header">
<Navbar />
</div>
<Messages messages={messages} currentMember={member} />
<Input onSendMessage={this.onSendMessage} />
</div>
);
}
}

export default App;