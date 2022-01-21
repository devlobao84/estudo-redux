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
    this.changeInput = this.changeInput.bind(this); 
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

  changeInput(event) {
    let target = event.target
    let index = target.name

    this.setState({
      [index]:target.value 
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <form>
            <label>Nome
              <input
               type="text"
               name="name"
               value={this.state.name}
               onChange={this.changeInput}    
               ></input>
            </label>
            <label>E-mail
              <input
               type="email"
               name="email"
               value={this.state.email}
               onChange={this.changeInput}    
               ></input>
            </label>
          </form>
          {this.state.name} - {this.state.email}</div>
        <div className="App">
          <button onClick={this.changeState}> Mudar estado</button>
          <button onClick={this.resetState}> Resetar estado</button>
        </div>
      </div>
    );
  }
}

export default App;
