import React from 'react';
import PropTypes from 'prop-types';
import './SearchBox.module.css';

const SearchBox = ({ setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search contacts"
      onChange={handleChange}
      className="SearchBox"
    />
  );
};

SearchBox.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchBox;
