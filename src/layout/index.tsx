import React from 'react';

import Header from '../components/Header';
import Menu from '../components/Menu';
import Main from '../components/Main';

import { Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Menu />
      <Main />
    </Wrapper>
  );
};

export default Layout;
