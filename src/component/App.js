import React from "react";

import { v4 as uuidv4 } from "uuid";

import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import  "./style.module.css";

const CONTACTS_DATA = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

class App extends React.Component {
  state = {
    contacts: CONTACTS_DATA,
    filter: "",
  };

  addContact = (name, number) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  removeContact = (contactID) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactID),
      };
    });
  };

  chengeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <div>
          <h1>Phonebook</h1>

          <ContactForm onAddContact={this.addContact} />

          <h2>Contacts</h2>
          {contacts.length > 1 && (
            <Filter value={filter} onChangeFilter={this.chengeFilter} />
          )}

          {contacts.length > 0 ? (
            <ContactList
              contacts={this.getVisibleContacts()}
              onRemoveContact={this.removeContact}
            />
          ) : (
            <p>No contacts</p>
          )}
        </div>
      </>
    );
  }
}

export default App;
