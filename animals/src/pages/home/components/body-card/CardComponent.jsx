import { CardContainer } from './styles';
import { CardHeader } from '../header-card';
import { PetImage } from '../image-card';
import { AdoptButton } from '../button-card';

const CardComponent = () => {
  return (
    <CardContainer>
      <CardHeader />
      <PetImage />
      <AdoptButton />
    </CardContainer>
  );
};

export default CardComponent;
