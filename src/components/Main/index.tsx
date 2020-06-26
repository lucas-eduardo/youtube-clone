import React from 'react';

import {
  Wrapper,
  Title,
  GridVideo,
  ThumbVideo,
  Thumb,
  ThumbVideoHeader,
  ImageChannel,
  ImageNotChannel,
  ThumbVideoInfo,
  ThumbVideoInfoTitle,
  ThumbVideoInfoNameChannel,
  ThumbVideoInfoView,
  ThumbVideoInfoTime,
} from './styles';

const Main: React.FC = () => {
  return (
    <Wrapper>
      <Title>Recomendados</Title>

      <GridVideo>
        {Array.from(Array(15).keys()).map(item => (
          <ThumbVideo key={item}>
            <Thumb />

            <ThumbVideoHeader>
              <ImageChannel>
                <ImageNotChannel />
              </ImageChannel>
              <ThumbVideoInfo>
                <ThumbVideoInfoTitle>
                  Não Decore Códigos, Início da Carreira, Speech to Text,
                  Xamarin, Tema da Rocket no VS Code | #PR 09
                </ThumbVideoInfoTitle>

                <ThumbVideoInfoNameChannel>
                  Rocketseat
                </ThumbVideoInfoNameChannel>

                <ThumbVideoInfoView>2,7 mil visualizações</ThumbVideoInfoView>

                <ThumbVideoInfoTime>há 1 hora</ThumbVideoInfoTime>
              </ThumbVideoInfo>
            </ThumbVideoHeader>
          </ThumbVideo>
        ))}
      </GridVideo>
    </Wrapper>
  );
};

export default Main;
