import React from 'react';

import { A } from './A';
import Img from './Img';
import Nav from './Nav';
import Wraper from './Wraper';
import Container from './Container';
import HeaderLink from './HeaderLink';

import Logo from './logo.svg';
import NavTypes from './nav-types.json';

class Header extends React.Component {
  render() {
    let menus = (<div></div>);
    menus = NavTypes.menus.map(item => (
      <HeaderLink key={item.type} to={item.type}>{item.title}</HeaderLink>
    ))

    return(
      <div>
        <Wraper>
          <Container>
            <A href="/">
              <Img src={Logo} alt="CNode"></Img>
            </A>
            <Nav>
              {menus}
            </Nav>
          </Container>
        </Wraper>
      </div>
    )
  }
}

export default Header;
