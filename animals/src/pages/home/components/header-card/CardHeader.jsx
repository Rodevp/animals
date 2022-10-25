import { CardHeaderContainer, PetName, PetProps } from './styles';

export function CardHeader() {
  return (
    <CardHeaderContainer>
      <PetName>Panchito</PetName>
      <PetProps>3 meses</PetProps>
      {/* Acá falta agregar los icons con alguna suerte de conditional rendering */}
      {/* El problema es que me va a venir del back, un "female"? directamente el icono? 
      who knows */}
    </CardHeaderContainer>
  );
}
