import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

class NavHead extends React.Component {
    state = { }
    render() {
        return (
        <Nav fluid>
            <NavItem>
                <NavLink href="#" active>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Fantasy</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Documentary</NavLink>
            </NavItem>
            <NavItem>
                <NavLink disabled href="#">Comedy</NavLink>
            </NavItem>
        </Nav> 
        );
    }
}

export default NavHead;