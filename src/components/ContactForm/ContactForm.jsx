import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Form } from './ContactForm.styled';
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
        <TextField
          id="outlined-password-input"
          label="Name"
          type="name"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <TextField
          id="outlined-password-input"
          label="Number"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          required
        />

        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </Form>
    </>
  );
};
