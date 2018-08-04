import * as React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { withKnobs } from '@storybook/addon-knobs';

const req = require.context('../src/components', true, /\.story\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(story => {
  return (
    <BrowserRouter>
      {story()}
    </BrowserRouter>
  );
});

addDecorator(withKnobs);

configure(loadStories, module);
