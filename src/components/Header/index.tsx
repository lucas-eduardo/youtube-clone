import React from 'react';
import {
  MdMenu,
  MdSearch,
  MdVideoCall,
  MdApps,
  MdNotifications,
} from 'react-icons/md';

import logo from '../../assets/logo.svg';

import {
  Wrapper,
  Navigation,
  Search,
  Actions,
  ButtonAction,
  Profile,
  ProfileNotImage,
} from './styles';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Navigation>
        <button type="button">
          <MdMenu />
        </button>
        <img src={logo} alt="Youtube" />
      </Navigation>

      <Search>
        <form>
          <input type="text" placeholder="Pesquisar" />

          <button type="submit">
            <MdSearch />
          </button>
        </form>
      </Search>

      <Actions>
        <ButtonAction type="button">
          <MdVideoCall />
        </ButtonAction>

        <ButtonAction type="button">
          <MdApps />
        </ButtonAction>

        <ButtonAction type="button">
          <MdNotifications />
        </ButtonAction>

        <Profile>
          <ProfileNotImage />
        </Profile>
      </Actions>
    </Wrapper>
  );
};

export default Header;
