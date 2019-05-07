import React from 'react';
import NavModal from './NavModal';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = ({ handleChange, handleClick, usersList}) => (
    <Navbar>
        <NavbarBrand className='text-info' href='#'>
            <i className="fa fa-user" aria-hidden="true"></i> Tiny Improvements
        </NavbarBrand>
        <NavModal buttonLabel='Give Kudos'
            handleChange={handleChange}
            handleClick={handleClick}
            usersList={usersList}
        />
    </Navbar>
);

export default Header;