import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './button.component';
import { H2 } from '../atm.typography';

storiesOf('Atoms', module)
  .add('Buttons', () => (
    <div>
      <H2>Button</H2>
      <br/>
      <Button onClick={handleClick}>Click</Button>
    </div>
))

const handleClick = () => console.log('click');
