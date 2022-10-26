import { AdoptButtonContainer, IconAlignment } from './styles';
import { IoPaw } from 'react-icons/io5';

export function AdoptButton({ name }) {
  return (
    <AdoptButtonContainer>
      Adopta a {name}
      <IconAlignment>
        <IoPaw />
      </IconAlignment>
    </AdoptButtonContainer>
  );
}
