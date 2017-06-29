import React from 'react';

import { A, NavItem} from './A';
import Img from './Img';
import Nav from './Nav';
import Wraper from './Wraper';
import Container from './Container';

import Logo from './logo.svg';
import NavTypes from './nav-types.json';

class Header extends React.Component {
  render() {
    let navItems = (<div></div>);
    navItems = NavTypes.menus.map((item, index) => (
      <NavItem key={item.type}>{item.title}</NavItem>
    ));

    return(
      <div>
        <Wraper>
          <Container>
            <A href="/">
              <Img src={Logo} alt="CNode"></Img>
            </A>
            <Nav>
              {navItems}
            </Nav>
          </Container>
        </Wraper>
      </div>
    )
  }
}

export default Header;
