import React from 'react';

const HamburgerMenu = ({ handleClose  }) => {
  return (
    <div className="hamburger-menu">
        <button onClick={handleClose}>Close</button>
      <h1>Hamburger Menu</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
