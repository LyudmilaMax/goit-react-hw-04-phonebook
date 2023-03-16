import { useEffect, useState } from 'react';
import { Layout } from './Layout';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (
      contacts.some(
        item => item.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return false;
    }
    
    setContacts(prevState => 
      setContacts([...prevState.contacts, newContact]) ,
    );
    return true;
  };

  const deleteContact = contactId => {
    setContacts(prevState => 
      prevState.filter(contact => contact.id !== contactId),
    );
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Layout
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={getVisibleContacts()} onDelete={deleteContact} />
    </Layout>
  );
};

// export class App extends Component {
  // componentDidMount() {
  //   const savedContacts = localStorage.getItem('contacts');
  //   if (savedContacts !== null) {
  //     const parsedContacts = JSON.parse(savedContacts);
  //     this.setState({ contacts: parsedContacts });
  //     return;
  //   }

  //   this.setState({ contacts: [] });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // addContact = newContact => {
  //   if (
  //     this.state.contacts.some(
  //       item => item.name.toLowerCase() === newContact.name.toLowerCase()
  //     )
  //   ) {
  //     alert(`${newContact.name} is already in contacts`);
  //     return false;
  //   }
  //   //

  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, newContact],
  //   }));
  //   return true;
  // };

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  // changeFilter = evt => {
  //   this.setState({ filter: evt.currentTarget.value });
  // };

  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // render() {
  //   const { filter } = this.state;
  //   const visibleContact = this.getVisibleContacts();

    // return (
    //   <Layout
    //     style={{
    //       display: 'flex',
    //       flexDirection: 'column',
    //       alignItems: 'center',
    //       color: '#010101',
    //     }}
    //   >
    //     <h1>Phonebook</h1>
    //     <ContactForm onSubmit={this.addContact} />

    //     <h2>Contacts</h2>
    //     <Filter value={filter} onChange={changeFilter} />
    //     <ContactList contacts={visibleContact} onDelete={this.deleteContact} />
    //   </Layout>
    // );
  }
// }
