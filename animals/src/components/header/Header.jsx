import { useState } from 'react';
import { IoPaw, IoPerson } from 'react-icons/io5';
import { HeaderContainer, HeaderTitle, IconHeaderAlignment } from './styles.js';

export const HeaderComponent = () => {
  const [popUpMenuRender, setPopupMenuRender] = useState(false);
  return (
    <HeaderContainer>
      <IconHeaderAlignment>
        <IoPaw />
      </IconHeaderAlignment>
      <HeaderTitle>Puppyfy</HeaderTitle>
      <IconHeaderAlignment>
        <IoPerson />
      </IconHeaderAlignment>
    </HeaderContainer>
  );
};
