import styled from 'styled-components';
import normalA from '../A';

const A = styled(normalA)`
  color: #fff;
  cursor: pointer;
`;

const NavItem = A.extend`
  padding: 10px;
  line-height: 30px;
  margin: 0 5px;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;


export {
  A,
  NavItem
};
