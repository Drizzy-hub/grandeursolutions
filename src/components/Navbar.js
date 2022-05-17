import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    /* defining the click function and setting state*/
    const [click, setClick] = useState(false);

    /* defining the handleclick function and setting state*/
    const handleClick = () => setClick(!click)

    /* defining the closing menu function*/
    const closeMobileMenu = () => setClick(false);
  return (
      <>
 
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Christ Living Church  <i class='fas fa-church' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                           Services
                        </Link>
                    </li>
                    
                    
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                           Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        <i class='fas fa-phone' />
                        </Link>
                    </li>

                </ul>
            </div>

        </nav>
    </>
  )
};

export default Navbar