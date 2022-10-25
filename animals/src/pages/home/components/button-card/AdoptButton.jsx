import { AdoptButtonContainer, IconAlignment } from './styles';
import { IoPaw } from 'react-icons/io5';

export function AdoptButton() {
  return (
    <AdoptButtonContainer>
      Adopta a Panchito
      <IconAlignment>
        <IoPaw />
      </IconAlignment>
    </AdoptButtonContainer>
  );
}
