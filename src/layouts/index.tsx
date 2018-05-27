import * as React from 'react';
import { Header, injectGlobals } from '../components';

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: any
}

injectGlobals();

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div>
        <Header />
        {this.props.children()}
      </div>
    )
  }
}

export default DefaultLayout
