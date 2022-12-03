// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
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
      <TextField
        id="outlined-password-input"
        label="Filter contacts by name"
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />

      <List>
        {filteredContacts.map(({ id, name, number }) => (
          <ListItem
            divider
            sx={{ display: 'flex' }}
            disableGutters
            key={id}
            secondaryAction={
              <IconButton
                onClick={() => dispatch(deleteContacts(id))}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <Divider />
            <ListItemText primary={`${name}:`} />
            <Divider />
            <ListItemText primary={`(${number})`} />
            <Divider />
          </ListItem>
        ))}
      </List>
    </>
  );
};
