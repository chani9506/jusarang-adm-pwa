import * as React from 'react';
import { Header } from './header.component';
import { storiesOf } from '@storybook/react';

storiesOf('Atoms', module)
  .add('Header', () => (
      <Header />
    ));
