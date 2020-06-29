import React from 'react';

import { useMenu } from '../hooks/Menu';

import Header from '../components/Header';
import Menu from '../components/Menu';
import Main from '../components/Main';

import { Wrapper } from './styles';

const Layout: React.FC = () => {
  const { openMenu } = useMenu();

  return (
    <Wrapper className={openMenu ? 'openMenu' : ''}>
      <Header />
      <Menu />
      <Main />
    </Wrapper>
  );
};

export default Layout;
