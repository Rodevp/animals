import { IoPaw, IoPerson } from 'react-icons/io5';
import { HeaderContainer, HeaderTitle, IconHeaderAlignment } from './styles.js';
import { PopupMenu } from '../pop-up-menu/PopUpMenu';
import { useState } from 'react';

export const HeaderComponent = () => {
  const [isRendered, setRendered] = useState(false);

  return (
    <HeaderContainer>
      <IconHeaderAlignment>
        <IoPaw />
      </IconHeaderAlignment>
      <HeaderTitle>Puppyfy</HeaderTitle>
      <IconHeaderAlignment>
        <IoPerson onClick={() => setRendered(!isRendered)} />
      </IconHeaderAlignment>
      {isRendered && <PopupMenu />}
    </HeaderContainer>
  );
};
