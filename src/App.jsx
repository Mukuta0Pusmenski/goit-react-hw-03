import React, { useState } from 'react';
import ContactList from '../src/commponents/ContactList/ContactList.jsx';
import SearchBox from '../scr/components/SearchBox/SearchBox.jsx';
import './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <SearchBox setSearchTerm={setSearchTerm} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
