import * as React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobals } from '../src/components';

const req = require.context('../src/components', true, /.story.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

injectGlobals();

addDecorator(story => {
  return (
    <BrowserRouter>
      {story()}
    </BrowserRouter>
  );
});

configure(loadStories, module);
