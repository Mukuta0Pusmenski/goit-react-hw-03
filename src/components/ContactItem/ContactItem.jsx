import React from 'react';
import PropTypes from 'prop-types';
import './ContactItem.module.css';

const ContactItem = ({ contact, deleteContact }) => {
  return (
    <li className="ContactItem">
      <span>{contact.name}: {contact.number}</span>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
