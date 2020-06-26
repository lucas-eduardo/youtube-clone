import styled from 'styled-components';

export const Wrapper = styled.menu`
  grid-area: MENU;

  display: flex;
  flex-direction: column;

  background-color: var(--white);

  padding: 1.2rem 0;

  overflow-y: hidden;

  &:hover {
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      height: 56px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }
`;

export const List = styled.div`
  h3 {
    color: var(--primary);
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 0.007px;
    padding: 0.8rem 2.4rem;
    text-transform: uppercase;
  }

  ul {
    li {
      display: block;

      width: 100%;

      color: var(--black);

      > div {
        display: flex;
        align-items: center;

        cursor: pointer;

        width: 100%;
        min-height: 40px;

        padding: 0 2.4rem;

        font-size: 1.4rem;

        line-height: 1.8rem;

        color: var(--black);

        div {
          width: 24px;
          height: 24px;
          margin-right: 2.4rem;

          svg {
            width: 24px;
            height: 24px;
            color: var(--primary);
          }
        }

        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      transition: background-color 0.2s;

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }

      &.active {
        background-color: var(--lightBlack);

        > div {
          font-weight: 500;

          svg {
            color: var(--red);
          }
        }
      }
    }
  }

  & + & {
    border-top: 1px solid var(--lightBlack);
    margin-top: 1.2rem;
    padding-top: 1.2rem;
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid var(--lightBlack);
  margin-top: 1.2rem;
  padding-top: 1.2rem;

  div {
    padding: 1.6rem 2.4rem 0;

    > span {
      display: inline-block;
      text-decoration: none;
      white-space: nowrap;
      font-size: 1.3rem;
      font-weight: 500;
      line-height: 1.8rem;
      color: var(--primary);
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
`;

export const AvatarChannel = styled.div`
  width: 24px;
  height: 24px;

  border-radius: 50%;

  background-color: var(--primary);

  margin-right: 2.4rem;
`;

export const Copyright = styled.div`
  padding: 1.6rem 2.4rem;

  p {
    color: var(--secondary);
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
`;
