import React, { Component } from "react";
import Contacts from "./Contacts";
import "./ContactList.css";

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._fullName.value !== "" && this._email.value !== "" && this._phoneNumber.value !== "") {
      var newItem = {
        fullName: this._fullName.value,
        email: this._email.value,
        phoneNumber: this._phoneNumber.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }
    this._fullName.value = "";
    this._email.value = "";
    this._phoneNumber.value = "";

    console.log(this.state.items);
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item){
      return (item.key !== key)
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className = "contactListMain">
        <div className = "header">
          <form onSubmit = {this.addItem}>
            <input ref = {(a) => this._fullName = a}
                   placeholder = "Enter full name">
            </input>
            <input ref = {(b) => this._email = b}
                   placeholder = "Enter email">
            </input>
            <input ref = {(c) => this._phoneNumber = c}
                   placeholder = "Enter phone number">
            </input>
            <button type = "submit"> add </button>
          </form>
        </div>
        <Contacts entries = {this.state.items}
                  delete = {this.deleteItem}/>
      </div>
    );
  }
}

export default ContactList;
