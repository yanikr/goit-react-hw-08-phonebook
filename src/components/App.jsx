import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './../redux/operations';

import { getError, getIsLoading } from './../redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <ContactForm />
      </div>
      <div>
        {isLoading && !error && <b>Request in progress...</b>}
        <h2>Contacts</h2>
        <ContactsList />
      </div>
    </>
  );
};
