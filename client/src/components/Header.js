import React from 'react';
import NavModal from './NavModal';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = props => (
    <Navbar>
        <NavbarBrand href='#'>Tiny Improvement</NavbarBrand>
        <NavModal buttonLabel='Give Kudos' />
    </Navbar>
);

export default Header;