import React, {Component} from "react";

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return <li onClick = {() => this.delete(item.key)}
               key = {item.key}>Full name: {item.fullName} <br/>
                                Email: {item.email} <br/>
                                Phone number: {item.phoneNumber}</li>
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    var contactEntries = this.props.entries;
    var listItems = contactEntries.map(this.createTasks);

    return (
      <ul className = "theList">
        {listItems}
      </ul>
    );
  }
}

export default Contacts;
