import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jonas",
    };
    this.changeState = this.changeState.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  changeState() {
    this.setState({
      name: "Ana amoremio",
      email: "lobao@mail.com"
    });
  }

  resetState() {
    this.setState({
      name: "Jonas",
    });
  }

  render() {
    return (
      <div className="App">
        <div>{this.state.name} - {this.state.email}</div>
        <div className="App">
          <button onClick={this.changeState}> Mudar estado</button>
          <button onClick={this.resetState}> Resetar estado</button>
        </div>
      </div>
    );
  }
}

export default App;
