import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;

  grid-template-columns: 24rem auto;
  grid-template-rows: 5.6rem auto;

  grid-template-areas:
    'HEADER HEADER'
    'MENU MAIN';

  height: 100vh;
`;
