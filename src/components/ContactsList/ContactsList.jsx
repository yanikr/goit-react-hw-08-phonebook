import { ContactsUl, ContactsLi, ContactsButton } from "./ContactsList.styled";

export const SingleContact = ({ id, name, number, onRemove }) => { 
    return (
        <ContactsLi>
            - {name}: {number}
            <ContactsButton onClick={() => onRemove(id)}>Remove</ContactsButton>
        </ContactsLi>
    )
}
export const ContactsList = ({contacts, onRemove}) => { 
    return (
        <ContactsUl>
            {contacts.map((contact, id) => (
                <SingleContact {...contact} key={id}
                onRemove={onRemove}/>
            ))}
        </ContactsUl>
    )
}

