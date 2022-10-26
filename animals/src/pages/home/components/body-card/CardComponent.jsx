import { CardContainer } from './styles';
import { CardHeader } from '../header-card';
import { PetImage } from '../image-card';
import { AdoptButton } from '../button-card';

const CardComponent = () => {
  return (
    // La card fue terminada pero es preciso fijarse bien como vamos
    // a colocar los datos que vengan del array u objeto
    <CardContainer>
      <CardHeader />
      <PetImage />
      <AdoptButton />
    </CardContainer>
  );
};

export default CardComponent;
