import React from 'react';

import NavBtn from './Button';
import Wraper from './Wraper';

class Navigator extends React.Component {
  render() {
    return (
      <Wraper>
        <NavBtn>&lt; Prev</NavBtn>
        1/20
        <NavBtn>Next &gt;</NavBtn>
      </Wraper>
    )
  }
}

export default Navigator;
