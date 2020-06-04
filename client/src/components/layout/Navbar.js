import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
  return <div></div>;
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: ''
};

export default Navbar;
