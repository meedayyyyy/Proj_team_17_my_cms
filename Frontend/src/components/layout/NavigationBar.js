import React from 'react';
import vectorLogo from '../../assets/img/Vector.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Button from '../general/Button';


const NavigationBar = () => {
  return (
    <nav className='w-full pt-12 xl:px-0 px-5'>
        <div className='max-w-6xl my-0 mx-auto w-auto flex items-center justify-between'>
            <div className='w-auto flex items-center'>
                <Link to="/" className='cursor-pointer'>
                    <img  src={vectorLogo} alt="logo"/>
                </Link>
                <button className='md:hidden border h-10 w-10 rounded-md'>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            <ul className='flex lg:w-3/5 w-8/12 justify-between item-center'>
                <div className='inline-flex item-center'>
                    <div className='w-auto inline-flex items-center cursor-pointer'>
                        <li className='py-1 pr-3 pl-3 lg:text-base text-sm not-italic font-medium'>
                            Resources
                        </li>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                    <div className='w-auto inline-flex items-center cursor-pointer'>
                        <li className='py-1 pr-4 pl-8 lg:text-base text-sm not-italic font-medium'>
                            Templates
                        </li>
                    </div>
                    <div className='w-auto inline-flex items-center cursor-pointer'>
                        <li className='py-1 pr-3 pl-4 lg:text-base text-sm not-italic font-medium'>
                            Features
                        </li>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                </div>

                <div className='inline-flex items-center'>
                    <li className='py-1 px-3 mr-4'>
                        <Link to="/login" className='font-medium text-sm lg:text-base not-italic cursor-pointer inline-flex'>Sign In</Link>
                    </li>
                    
                    <Link to='/signup'><Button name="Get Started"/></Link>
                </div>
            </ul>
        </div>
    </nav>
  );
}

export default NavigationBar;