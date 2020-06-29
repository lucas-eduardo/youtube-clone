import styled from 'styled-components';

export const Wrapper = styled.header`
  grid-area: HEADER;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--white);

  padding: 0 1.6rem;
`;

export const Navigation = styled.div`
  width: 100%;
  max-width: 185px;

  > button {
    width: 40px;
    height: 40px;

    margin-right: 1.6rem;

    color: var(--primary);

    svg {
      width: 24px;
      height: 24px;
    }
  }

  > img {
    width: 80px;
    height: 24px;
  }

  @media screen and (max-width: 525px) {
    > img {
      display: none;
    }
  }
`;

export const Search = styled.div`
  display: flex;

  width: 100%;
  max-width: 728px;

  form {
    display: flex;
  }

  form,
  input {
    width: 100%;
    height: 30px;
  }

  input {
    padding: 0.2rem 0.6rem;
    border: 1px solid var(--gray);
    border-right: none;
    border-radius: 2px 0 0 2px;
    box-shadow: inset 0 1px 2px var(--gray93);
    color: var(--black);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 65px;
    height: 30px;
    border: 1px solid var(--gray83);
    background-color: var(--white97);
    border-radius: 0 2px 2px 0;

    svg {
      width: 20px;
      height: 20px;
      color: var(--black20);
    }
  }

  @media screen and (max-width: 525px) {
    display: none;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 225px;
  height: 40px;
`;

export const ButtonAction = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  padding: 0.8rem;

  color: var(--primary);

  svg {
    width: 24px;
    height: 24px;
  }

  & + button {
    margin-left: 0.8rem;
  }

  @media screen and (max-width: 525px) {
    display: none;
  }
`;

export const Profile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 40px;
`;

export const ProfileNotImage = styled.div`
  width: 32px;
  height: 32px;

  background-color: var(--primary);
  border-radius: 50%;
`;
