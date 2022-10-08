import { IoPaw, IoPerson } from 'react-icons/io5';
import { HeaderContainer, HeaderTitle, IconHeaderAlignment } from './styles.js';
const Header = () => {
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

export default Header;
