import React from 'react';
import {
  MdHome,
  MdWhatshot,
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdSlideshow,
  MdWatchLater,
  MdThumbUp,
  MdKeyboardArrowDown,
  MdSettings,
  MdHelp,
} from 'react-icons/md';
import {
  AiFillYoutube,
  AiFillFlag,
  AiFillExclamationCircle,
} from 'react-icons/ai';
import { GiFilmStrip } from 'react-icons/gi';
import { IoLogoGameControllerB } from 'react-icons/io';
import { RiRecordCircleLine } from 'react-icons/ri';

import { Wrapper, List, AvatarChannel, Footer, Copyright } from './styles';

const Menu: React.FC = () => {
  return (
    <Wrapper>
      <List>
        <ul>
          <li className="active">
            <div>
              <div>
                <MdHome />
              </div>{' '}
              <span>Início</span>
            </div>
          </li>
          <li>
            <div>
              <div>
                <MdWhatshot />
              </div>{' '}
              <span>Em alta</span>
            </div>
          </li>

          <li>
            <div>
              <div>
                <MdSubscriptions />
              </div>{' '}
              <span>Inscrições</span>
            </div>
          </li>
        </ul>
      </List>

      <List>
        <ul>
          <li>
            <div>
              <div>
                <MdVideoLibrary />
              </div>{' '}
              <span>Biblioteca</span>
            </div>
          </li>

          <li>
            <div>
              <div>
                <MdHistory />
              </div>{' '}
              <span>Histórico</span>
            </div>
          </li>

          <li>
            <div>
              <div>
                <MdSlideshow />
              </div>{' '}
              <span>Seus vídeos</span>
            </div>
          </li>

          <li>
            <div>
              <div>
                <MdWatchLater />
              </div>{' '}
              <span>Assistir mais tarde</span>
            </div>
          </li>

          <li>
            <div>
              <div>
                <MdThumbUp />
              </div>{' '}
              <span>Vídeos marcados com "Gostei"</span>
            </div>
          </li>

          <li>
            <div>
              <div>
                <MdKeyboardArrowDown />
              </div>{' '}
              <span>Mostrar mais</span>
            </div>
          </li>
        </ul>
      </List>

      <List>
        <h3>Inscrições</h3>

        <ul>
          <li>
            <div>
              <div>
                <AvatarChannel />
              </div>{' '}
              <span>Full Cycle</span>
            </div>
          </li>

          <li>
            <div>
              <div>
                <AvatarChannel />
              </div>{' '}
              <span>Rocketseat</span>
            </div>
          </li>
        </ul>
      </List>

      <List>
        <h3>Mais do YouTube</h3>

        <ul>
          <li>
            <div>
              <div>
                <AiFillYoutube />
              </div>{' '}
              <span>YouTube Premium</span>
            </div>
          </li>

          <li>
            <div>
              <div>
                <GiFilmStrip />
              </div>{' '}
              <span>YouTube Filmes</span>
            </div>
          </li>

          <li>
            <div>
              <div>
                <IoLogoGameControllerB />
              </div>{' '}
              <span>Jogos</span>
            </div>
          </li>

          <li>
            <div>
              <div>
                <RiRecordCircleLine />
              </div>{' '}
              <span>Ao vivo</span>
            </div>
          </li>
        </ul>
      </List>

      <List>
        <ul>
          <li>
            <div>
              <div>
                <MdSettings />
              </div>{' '}
              <span>Configurações</span>
            </div>
          </li>

          <li>
            <div>
              <div>
                <AiFillFlag />
              </div>{' '}
              <span>Histórico de denúncias</span>
            </div>
          </li>

          <li>
            <div>
              <div>
                <MdHelp />
              </div>{' '}
              <span>Ajuda</span>
            </div>
          </li>

          <li>
            <div>
              <div>
                <AiFillExclamationCircle />
              </div>{' '}
              <span>Enviar feedback</span>
            </div>
          </li>
        </ul>
      </List>

      <Footer>
        <div>
          <span>Sobre</span>
          <span>Imprensa</span>
          <span>Direitos autorais</span>
          <span>Criadores de conteúdo</span>
          <span>Publicidade</span>
          <span>Desenvolvedores</span>
        </div>

        <div>
          <span>Termos</span>
          <span>Privacidade</span>
          <span>Política e Segurança</span>
          <span>Testar os novos recursos</span>
        </div>

        <Copyright>
          <p>© 2020 Google LLC</p>
        </Copyright>
      </Footer>
    </Wrapper>
  );
};

export default Menu;
