import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList/ContactList.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx'; // Додаємо імпорт
import './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    // Завантаження контактів з локального сховища під час першого рендерингу
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Збереження контактів у локальному сховищі при зміні масиву контактів
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} /> {/* Додаємо компонент ContactForm */}
      <SearchBox setSearchTerm={setSearchTerm} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
