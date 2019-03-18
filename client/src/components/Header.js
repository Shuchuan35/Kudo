import React from 'react';
import NavModal from './NavModal';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = props => (
    <Navbar>
        <NavbarBrand className='text-info' href='#'>
            <i className="fa fa-user" aria-hidden="true"></i> Tiny Improvements
        </NavbarBrand>
        <NavModal buttonLabel='Give Kudos'
            handleChange={props.handleChange}
            handleClick={props.handleClick}
            usersList={props.usersList}
        />
    </Navbar>
);

export default Header;