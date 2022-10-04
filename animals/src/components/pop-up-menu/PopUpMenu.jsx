import { PopUpMenuContainer, LinkStyles, IconMenuAlignment } from './styles.js';
import { IoLogOutSharp, IoPaw } from 'react-icons/io5';

export const PopupMenu = () => {
  return (
    <PopUpMenuContainer>
      <LinkStyles>
        Logout
        <IconMenuAlignment>
          <IoLogOutSharp />
        </IconMenuAlignment>
      </LinkStyles>
      <LinkStyles>
        Mis animales
        <IconMenuAlignment>
          <IoPaw />
        </IconMenuAlignment>
      </LinkStyles>
    </PopUpMenuContainer>
  );
};
