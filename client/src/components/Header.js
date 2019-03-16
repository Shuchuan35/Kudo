import React from 'react';
import NavModal from './NavModal';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = props => (
    <Navbar>
        <NavbarBrand href='#'>Tiny Improvement</NavbarBrand>
        <NavModal buttonLabel='Give Kudos' 
            handleClick={props.handleClick} 
            usersList={props.usersList}
        />
    </Navbar>
);

export default Header;