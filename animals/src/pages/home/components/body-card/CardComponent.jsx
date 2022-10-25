import { CardContainer } from './styles';
import { CardHeader } from '../header-card';
import { PetImage } from '../image-card';

const CardComponent = () => {
  return (
    <CardContainer>
      <CardHeader />
      <PetImage />
    </CardContainer>
  );
};

export default CardComponent;
