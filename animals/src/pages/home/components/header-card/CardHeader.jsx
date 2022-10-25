import { CardHeaderContainer, PetName, PetProps } from './styles';

export function CardHeader() {
  return (
    <CardHeaderContainer>
      <PetName>Panchito</PetName>
      <PetProps>3 meses</PetProps>
      {/* Acá falta agregar los icons con alguna suerte de conditional rendering */}
    </CardHeaderContainer>
  );
}
