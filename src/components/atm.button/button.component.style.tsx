import styled from 'styled-components';
import { Color, FontFamily, FontSize, FontWeight, Spacing } from '../obj.constants';
import { ButtonProps } from './button.component';

export const ButtonStyled = styled.button`
  min-width: 100px;
  heigth: 40px;
  background-color: ${(props: ButtonProps) => props.kind === 'secondary' ? Color.Secondary : Color.Primary };
  padding: ${Spacing.Small} ${Spacing.Medium};
  border: 1px solid ${(props: ButtonProps) => props.kind === 'secondary' ? Color.Secondary : Color.Primary };
  border-radius: 4px;
  color: ${Color.White};
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Medium};
  font-weight: ${FontWeight.Normal};
`;
