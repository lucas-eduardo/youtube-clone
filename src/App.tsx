import React from 'react';

import AppContext from './hooks';

import Layout from './layout';

import GlobalStyle from './styles/global';

function App() {
  return (
    <AppContext>
      <Layout />
      <GlobalStyle />
    </AppContext>
  );
}

export default App;
