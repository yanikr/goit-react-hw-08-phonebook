import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { nanoid } from 'nanoid';
import {
  Form,
  AddContactButton,
  AddContactInput,
  AddContactLabel,
} from './ContactForm.styled';
import { addContacts } from 'redux/contacts/operations';
import { getContacts } from '../../redux/contacts/contactsSlice';

export const ContactForm = () => {
  const [formValue, setFormValue] = useState({ name: '', number: '' });
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = evt =>
    setFormValue(val => ({ ...val, [evt.target.name]: evt.target.value }));

  const checkContacts = data => {
    const findContact = contacts.some(contact => contact.name === data.name);

    if (findContact) {
      return alert(`${data.name} is already in contacts`);
    }
    console.log(data);
    dispatch(addContacts({ ...data }));
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    checkContacts(formValue);
    setFormValue({ name: '', number: '' });
  };

  const { name, number } = formValue;

  return (
    <>
      <Form onSubmit={handleSubmitForm}>
        <AddContactLabel>
          Name
          <AddContactInput
            name="name"
            type="name"
            value={name}
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </AddContactLabel>
        <AddContactButton type="submit">Add contact</AddContactButton>
      </Form>
    </>
  );
};
