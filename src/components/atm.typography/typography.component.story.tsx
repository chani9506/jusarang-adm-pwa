import * as React from 'react';
import { Body, H1, H2 } from './typography.component.style';
import { storiesOf } from '@storybook/react';

storiesOf('Atoms', module)
  .add('Typography', () => (
    <div>
      <div style={{backgroundColor : 'black'}}>
        <H1>This is a H1</H1>
      </div>
      <div>
        <H2>This is a H2</H2>
      </div>
      <div>
        <Body>This is a Body, This is a Body, This is a Body, This is a Body, This is a Body</Body>
      </div>
    </div>
    ))
