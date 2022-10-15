import { CardHeaderContainer, PetName, PetProps } from './styles';

const CardHeader = () => {
  return (
    <CardHeaderContainer>
      <PetName>Panchito</PetName>
      <PetProps>3 meses</PetProps>
    </CardHeaderContainer>
  );
};

export default CardHeader;
