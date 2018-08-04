import * as React from 'react';
import { Header } from '../components/org.header';
import { injectGlobals } from '../components/obj.globals';
import { GridConfig } from '../components/obj.grid';
import { ThemeProvider } from 'styled-components';

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string,
  };
  children: any;
}

injectGlobals();

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <ThemeProvider theme={GridConfig}>
        <>
          <Header/>
          {this.props.children()}
        </>
      </ThemeProvider>
    );
  }
}

export default DefaultLayout;
