import React from 'react';

const HocCreateList = (WrapComponent, tag) => {
  return class CreateList extends React.Component {
    render() {
      let newProps = {
        tag
      };
      return (
        <WrapComponent  {...newProps} />
      )
    }
  }
}

export default HocCreateList;
