import React from 'react';
import App from '../src/components/App';
import Header from '../src/components/Header';

geminiReact.suite('Header', (suite) => {
  suite.render(<App context={{ insertCss: (...styles) => styles.forEach(x => x._insertCss()) }}>
    <Header />
  </App>)
    .capture('plain');
});
