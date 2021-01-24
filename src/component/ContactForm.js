import React, { Component } from "react";
import style from "./style.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  hendleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  hendleSubmit = (e) => {
    const { name, number } = this.state;
    e.preventDefault();

    this.props.onAddContact(name, number);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.hendleSubmit} className={style.formStyleBorder}>
        <label className={style.lablePosition}>
          Name
          <input
            type="name"
            value={name}
            onChange={this.hendleChange}
            name="name"
            required
          />
        </label>

        <label className={style.lablePosition}>
          Number
          <input
            type="phone"
            value={number}
            onChange={this.hendleChange}
            name="number"
            placeholder="645-17-79"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            required
          />
        </label>
        <button type="submit" className={style.buttonStyleForm}>Add contact</button>
      </form>
    );
  }
}

// const ContactForm = ({ onAddContact }) => (
//   <div>
//     <button type="button" onClick={onAddContact}>
//       Add contact
//     </button>
//   </div>
// );

export default ContactForm;
