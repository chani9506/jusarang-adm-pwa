import * as React from 'react';
import { Body, Caption, H1, H2, H3, H4 } from './typography.component.style';
import { storiesOf } from '@storybook/react';
import { Col, Grid, Row } from '../obj.grid';

storiesOf('Atoms', module)
  .add('Typography', () => (
  <Grid bgColor={true}>
    <Row>
      <Col xs={12}>
        <H1>This is a H1</H1>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <H2>This is a H2</H2>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <H3>This is a H3</H3>
      </Col>
    </Row>
    <Row mb={true}>
      <Col xs={12}>
        <H4>This is a H4</H4>
      </Col>
    </Row>
    <Row mb={true}>
      <Col xs={12}>
        <Body>This is a Body, This is a Body, This is a Body, This is a Body, This is a Body</Body>
      </Col>
    </Row>
    <Row mb={true}>
      <Col xs={12}>
        <Caption>This is a caption</Caption>
      </Col>
    </Row>
  </Grid>
));
