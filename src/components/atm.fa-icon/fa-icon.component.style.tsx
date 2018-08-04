import styled from 'styled-components';
import { Icon } from 'react-fa';
import { Color, IconSize } from '../obj.constants';

const FaIcon = styled(Icon)`
  color: ${Color.GrayLight};
  font-size: ${IconSize.Medium} !important;
  vertical-align: middle;
`;

export const UserIcon = styled(FaIcon).attrs({ name: 'user' })`
`;
