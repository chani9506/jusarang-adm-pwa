import * as React from 'react';
import { ButtonStyled } from './button.component.style';

export interface ButtonProps {
  onClick: () => void;
  kind?: 'primary' | 'secondary';
}

export class Button extends React.Component<ButtonProps, undefined> {
  render() {
    return (
      <ButtonStyled kind={this.props.kind} onClick={this.props.onClick}>{this.props.children}</ButtonStyled>
    );
  }
}
