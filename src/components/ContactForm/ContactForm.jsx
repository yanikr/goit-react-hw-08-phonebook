// import { nanoid } from 'nanoid';
import { useState } from 'react';
import {
  Form,
  AddContactButton,
  AddContactInput,
  AddContactLabel,
} from './ContactForm.styled';

export const ContactForm = ({ addContact, onCheckUnique }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = evt => {
    setName(evt.target.value);
  };
  const handleChangeNumber = evt => {
    setNumber(evt.target.value);
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();

    const checkingUniqueContacts = checkUnique();
    if (!checkingUniqueContacts) return;
    const newContact = { name, number };
    addContact(newContact);

    reset();
  };

  const checkUnique = () => {
    if (!name) {
      return false;
    }
    return onCheckUnique(name);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={handleSubmitForm}>
        <AddContactLabel>
          Name
          <AddContactInput
            name="name"
            type="text"
            value={name}
            onChange={handleChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </AddContactLabel>
        <AddContactLabel>
          Number
          <AddContactInput
            name="number"
            type="tel"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={handleChangeNumber}
            required
          />
        </AddContactLabel>
        <AddContactButton type="submit">Add contact</AddContactButton>
      </Form>
    </>
  );
};
