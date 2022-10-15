import { CardHeaderContainer, PetName, PetProps } from './styles';

export function CardHeader() {
  return (
    <CardHeaderContainer>
      <PetName>Panchito</PetName>
      <PetProps>3 meses</PetProps>
    </CardHeaderContainer>
  );
}
