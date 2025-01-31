import React from 'react';
import PropTypes from 'prop-types';
import './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  return (
    <li className="ContactItem">
      <span>{contact.name}: {contact.number}</span>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
