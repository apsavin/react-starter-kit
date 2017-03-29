const React = require('react');
const Header = require('../src/components/Header');

geminiReact.suite('Header', (suite) => {
  suite.render(<Header />)
        .capture('plain');
});
