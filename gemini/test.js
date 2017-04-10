import React from 'react';
import Header from '../src/components/Header';

geminiReact.suite('Header', (suite) => {
  suite.render(<Header />)
        .capture('plain');
});
