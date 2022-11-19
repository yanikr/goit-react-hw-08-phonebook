import {
  ContactsUl,
  ContactsLi,
  ContactsButton,
  FilterP,
  InputFilter,
} from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFilter,
  filterContacts,
  deleteContact,
} from './../../redux/contactsSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(state => state.text.contacts.items);

  const deleteContactById = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = evt => {
    dispatch(filterContacts(evt.target.value));
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <FilterP>Find contacts by name</FilterP>
      <InputFilter
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
      <ContactsUl>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactsLi key={id}>
            <span>{name} : </span>
            <span> ({number})</span>
            <ContactsButton type="button" onClick={() => deleteContactById(id)}>
              Remove
            </ContactsButton>
          </ContactsLi>
        ))}
      </ContactsUl>
    </>
  );
};
