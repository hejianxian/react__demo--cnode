import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  padding: 10px;
  line-height: 30px;
  margin: 0 5px;
  text-decoration: none;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

export default HeaderLink;
