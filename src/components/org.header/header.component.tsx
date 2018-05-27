import * as React from 'react';
import Link from 'gatsby-link';
import { HeaderStyled } from './header.component.style';
import { H1 } from '../atm.typography';

export const Header = () => (
  <HeaderStyled>
    <div
      style={{padding: '16px'}}
    >
      <Link to='/'><H1>Jusarang</H1></Link>
    </div>
  </HeaderStyled>
)
