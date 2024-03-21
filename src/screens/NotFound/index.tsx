import { FC } from 'react';

import { ImageFit } from '~/components/ImageFit';

import { Main, ScreenCentralized } from './styles';

const imageName = 'landscape-with-clouds-mountains-trees-with-not-found-background.svg';
const imageDescription = 'Paisagem com nuvens montanhas e arvores com not found ao fundo';

export const NotFound: FC = () => (
  <Main>
    <ScreenCentralized>
      <ImageFit description={imageDescription} fill fit="cover" src={`images/${imageName}`} />
    </ScreenCentralized>
  </Main>
);
