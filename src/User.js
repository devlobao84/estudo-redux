import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="title">Nome: {this.props.name}</h1>
        </div>

        <div>
          Foto: <img className="avatar-jonas" src={this.props.foto} />
        </div>


      </div>
    );
  }
}

export default User;
