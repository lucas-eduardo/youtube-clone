import styled from 'styled-components';

export const Wrapper = styled.main`
  grid-area: MAIN;

  display: flex;
  flex-direction: column;

  margin: 3.6rem 0 0 2.4rem;
  padding: 1.2rem 0;

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
`;

export const Title = styled.span`
  color: var(--black);

  font-size: 2rem;
  font-weight: 500;
  line-height: 2.4rem;
`;

export const GridVideo = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 4rem 1rem;

  margin-top: 1.6rem;

  @media screen and (max-width: 525px) {
    align-self: center;
  }
`;

export const ThumbVideo = styled.div``;

export const Thumb = styled.div`
  width: 250px;
  height: 140px;

  background-color: var(--primary);
`;

export const ThumbVideoHeader = styled.div`
  margin-top: 1.2rem;

  display: flex;
`;

export const ImageChannel = styled.div`
  margin-right: 1.2rem;
`;

export const ImageNotChannel = styled.div`
  width: 36px;
  height: 36px;

  border-radius: 50%;

  background-color: var(--primary);
`;

export const ThumbVideoInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding-right: 2.4rem;
`;

export const ThumbVideoInfoTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;

  max-height: 4rem;

  margin-bottom: 0.6rem;

  color: var(--black);

  display: -webkit-box;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ThumbVideoInfoNameChannel = styled.span`
  font-size: 1.4rem;
  line-height: 1.8rem;

  color: var(--primary);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ThumbVideoInfoView = styled.span`
  font-size: 1.4rem;
  line-height: 1.8rem;

  color: var(--primary);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:after {
    content: '•';
    margin: 0 0.4rem;
  }
`;

export const ThumbVideoInfoTime = styled.span`
  font-size: 1.4rem;
  line-height: 1.8rem;

  color: var(--primary);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
