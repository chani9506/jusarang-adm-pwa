import * as React from 'react';
import { H2 } from '../components/atm.typography';
import { Col, Grid, Row } from '../components/obj.grid';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface HomeProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export default class Home extends React.Component<HomeProps, undefined> {
  render() {
    return (
      <Grid>
        <Row center={'xs'}>
          <Col xs={12}>
            <H2>Home</H2>
          </Col>
        </Row>
      </Grid>
    );
  }
}
