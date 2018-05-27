import * as React from 'react'
import { H2 } from '../components';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface HomeProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default class Home extends React.Component<HomeProps, undefined> {
  render() {
    return (
      <>
        <H2>Hi people</H2>
      </>
    )
  }
}
