import { ContactForm } from 'components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from 'redux/contacts/contactsSlice';
import Typography from '@mui/material/Typography';
import { fetchContacts } from 'redux/contacts/operations';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

import { ContactsList } from './../components/ContactsList/ContactsList';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" sx={{ mb: 2 }}>
          Phonebook
        </Typography>
        <ContactForm />

        <div>
          {isLoading && (
            <CircularProgress
              size={60}
              sx={{
                zIndex: 1,
              }}
            />
          )}
        </div>
        <Typography variant="h2" sx={{ mb: 4, mt: 4 }}>
          Contacts
        </Typography>
        <ContactsList />
      </Container>
    </>
  );
}
