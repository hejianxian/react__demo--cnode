import React from 'react';

import NavBtn from './Button';
import Wraper from './Wraper';

class Navigator extends React.Component {
  render() {
    return (
      <div>
        <Wraper>
          <NavBtn>&lt; Prev</NavBtn>
          1/20
          <NavBtn>Next &gt;</NavBtn>
        </Wraper>
      </div>
    )
  }
}

export default Navigator;
