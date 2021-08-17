import  { useEffect, useState} from 'react';

import ContactForm from './components/ContactForm';
import ContactFilter from './components/ContactFilter';
import ContactList from './components/ContactList';

import styles from "./App.module.css";


export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localContacts);
    if (parsedContacts) {
      setContacts(parsedContacts)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);


  const addContact = (newContact) => {
    const check = contacts.find(
      ({ name }) => name === newContact.name
    );
    
    
    if (check !== undefined) {
      alert(`${newContact.name} is already in contacts`)
      return;
    }
    
    
    setContacts((prevState) => [newContact, ...prevState])
  };

  const removeContact = (id) => {
      setContacts(contacts.filter((contact) =>
        contact.id !== id));    
  };
  const changeFilter = (e) => {
    setFilter(e.currentTarget.value );
  };
  
  
    
  const normalizedFilter = filter.toLowerCase();
  const visibleFilterContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
      <div className={styles.Container}>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact}/>
        <h2>Contacts</h2>
        <ContactFilter value={filter} onChange={changeFilter} />
        <ContactList contacts={visibleFilterContact} onClick={removeContact} />
      </div>
    );
}


