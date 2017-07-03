import styled from 'styled-components';

import normalA from '../A';

const NavBtn = styled(normalA)`
  font-size: 13px;
  line-height: 44px;
  padding: 0 12px;
  color: ${props => props.disabled ? '#ccc' : '#333'};
  cursor: ${props => props.disabled ? 'normal': 'pointer'}
`;

export default NavBtn;
