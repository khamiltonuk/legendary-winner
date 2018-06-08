import React, { Component } from "react";
import shortid from "shortid";

export default class AddPlayer extends Component {
  handleSubmit = e => {
    e.preventDefault();
    if (this._inputElement.value !== "") {
      var newItem = {
        name: this._inputElement.value,
        key: shortid.generate()
      };

      this.props.addPlayer(newItem);

      this._inputElement.value = "";
      this.props.closeModal();
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name" />
        <input
          id="name"
          type="text"
          autoFocus="true"
          autocomplete="name"
          rplaceholder="e.g. Jimbo"
          ref={a => (this._inputElement = a)}
        />
        <button type="submit">Add Player</button>
      </form>
    );
  }
}
