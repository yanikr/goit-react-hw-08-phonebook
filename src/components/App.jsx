import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <ContactForm />
      </div>
      <div>
        <h2>Contacts</h2>
        <ContactsList />
      </div>
    </>
  );
};
