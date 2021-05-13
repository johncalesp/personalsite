import React from 'react';

const Navbar = ({ home, experience, projects, setActive }) => {
  return (
    <header className='nav-header'>
      <h3 className='nav-logo'>Keep It Simple</h3>
      <nav className='nav-items'>
        <button
          className={`${home ? 'nav-link active' : 'nav-link'}`}
          href='#'
          onClick={() => {
            setActive(true, false, false);
          }}
        >
          Home
        </button>
        <button
          className={`${experience ? 'nav-link active' : 'nav-link'}`}
          href='#'
          onClick={() => {
            setActive(false, true, false);
          }}
        >
          Experience
        </button>
        <button
          className={`${projects ? 'nav-link active' : 'nav-link'}`}
          href='#'
          onClick={() => {
            setActive(false, false, true);
          }}
        >
          Projects
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
