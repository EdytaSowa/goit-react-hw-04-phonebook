import css from './ContactList.module.css'

export const ContactList = ({ contacts, handleDelete }) => (
  <>
  
    <ul>
      {contacts.map((contact,id) => (
        <li key={id}>{contact.name} {contact.number}
        <button className = {css.button}type="button" onClick={()=> handleDelete(contact.id)}> Delete </button></li>
      ))}
    </ul>
  </>
);
