import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;

  grid-template-columns: 24rem auto;
  grid-template-rows: 5.6rem auto;

  grid-template-areas:
    'HEADER HEADER'
    'MENU MAIN';

  height: 100vh;

  &.openMenu {
    grid-template-columns: 0 100vw;
  }

  @media screen and (max-width: 525px) {
    grid-template-columns: 0 auto;

    &.openMenu {
      grid-template-columns: 100vw 0;
    }
  }
`;
