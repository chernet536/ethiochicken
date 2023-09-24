import React, { useState } from 'react';
import { Button } from './Button';
import { Link, useLocation } from 'react-router-dom';
import ECLOGO2 from '../images/EC_LOGO.png';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <div>
            <img src={ECLOGO2} alt='eclogo' className='etc-logo' />
          </div>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link
              to='/'
              className={`nav-links ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/marketing'
              className={`nav-links ${location.pathname === '/marketing' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Our Products <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/aboutuspage'
              className={`nav-links ${location.pathname === '/aboutuspage' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/ourstrategy'
              className={`nav-links ${location.pathname === '/ourstrategy' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Our Strategy
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/newspage'
              className={`nav-links ${location.pathname === '/newspage' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              News
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='JobList'
              className={`nav-links ${location.pathname === '/JobList' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Contact US
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;