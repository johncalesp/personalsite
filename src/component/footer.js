import React from 'react';
import { FaLinkedin, FaGithub, FaKaggle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer-section'>
      <ul className='footer-items'>
        <li>
          <a
            href='https://www.linkedin.com/in/john-calderon/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
            <h6>Linkedin</h6>
          </a>
        </li>
        <li>
          <a
            href='https://github.com/johncalesp'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
            <h6>Github</h6>
          </a>
        </li>
        <li>
          <a
            href='https://www.kaggle.com/johnsnow27'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaKaggle />
            <h6>Kaggle</h6>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
