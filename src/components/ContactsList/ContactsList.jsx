import {
  ContactsUl,
  ContactsLi,
  ContactsButton,
  FilterP,
  InputFilter,
} from './ContactsList.styled';
import { deleteContacts } from '../../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contactsSlice';
import { filterContacts, getFilter } from '../../redux/contacts/filterSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const handleFilterChange = evt => {
    dispatch(filterContacts(evt.target.value));
  };
  const filteredContacts = contacts.filter(text =>
    text.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <FilterP>Find contacts by name</FilterP>
      <InputFilter type="text" value={filter} onChange={handleFilterChange} />
      <ContactsUl>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactsLi key={id}>
            <span>{name} : </span>
            <span> ({number})</span>
            <ContactsButton
              type="button"
              onClick={() => dispatch(deleteContacts(id))}
            >
              Remove
            </ContactsButton>
          </ContactsLi>
        ))}
      </ContactsUl>
    </>
  );
};
