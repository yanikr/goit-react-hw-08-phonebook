import { ContactsUl, ContactsLi, ContactsButton } from './ContactsList.styled';
import PropTypes from 'prop-types';
export const SingleContact = ({ id, name, number, onRemove }) => {
  return (
    <>
      <ContactsLi>
        - {name}: {number}
        <ContactsButton onClick={() => onRemove(id)}>Remove</ContactsButton>
      </ContactsLi>
    </>
  );
};
export const ContactsList = ({ contacts, onRemove }) => {
  return (
    <>
      <ContactsUl>
        {contacts.map((contact, id) => (
          <SingleContact {...contact} key={id} onRemove={onRemove} />
        ))}
      </ContactsUl>
    </>
  );
};

SingleContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};
