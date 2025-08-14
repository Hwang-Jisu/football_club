import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Header = () => (
  <>
    <h1><a href="#"><img src="/img/logo.png" alt="Logo" /></a></h1>
    <ul className='gnb'>
      {['Home', 'Info', 'About', 'Community', 'Contact'].map((d, i) => (
        <li key={i}><a href="#">{d}</a></li>
      ))}
    </ul>
    <ul className='sns'>
      <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
      <li><a href="#"><FontAwesomeIcon icon={faXTwitter} /></a></li>
      <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
    </ul>
  </>
);

export default Header;