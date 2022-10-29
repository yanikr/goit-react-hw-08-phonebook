import { useState, useEffect } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const contact = {
      id: nanoid(),
      name: newContact.name,
      number: newContact.number,
    };
    setContacts(prevState => [contact, ...prevState]);
  };

  const checkContacts = name => {
    const findContact = contacts.find(contacts => contacts.name === name);
    if (findContact) {
      return alert(`${name} is already in contacts`);
    }
    return !findContact;
  };

  const removeContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };
  const filterInput = filter => setFilter(filter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Section title="Phonebook">
        <ContactForm addContact={addContact} onCheckUnique={checkContacts} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onChange={filterInput} />
        <ContactsList contacts={filterContacts} onRemove={removeContact} />
      </Section>
    </>
  );
};
