import { ContactForm } from 'components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from 'redux/contacts/contactsSlice';
import { fetchContacts } from 'redux/contacts/operations';
// import { Helmet } from 'react-helmet';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';
import { ContactsList } from './../components/ContactsList/ContactsList';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <ContactForm />
      </div>
      <div>{isLoading && 'Request in progress...'}</div>
      <h2>Contacts</h2>
      <ContactsList />
    </>
  );
}

// <Helmet>
// <title>Your tasks</title>
//   </Helmet>
