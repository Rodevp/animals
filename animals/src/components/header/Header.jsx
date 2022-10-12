import { IoPaw, IoPerson } from 'react-icons/io5';
import { HeaderContainer, HeaderTitle, IconHeaderAlignment } from './styles.js';

export const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <IconHeaderAlignment>
        <IoPaw />
      </IconHeaderAlignment>
      <HeaderTitle>Puppyfy</HeaderTitle>
      <IconHeaderAlignment>
        <IoPerson onClick={() => {}} />
      </IconHeaderAlignment>
    </HeaderContainer>
  );
};
