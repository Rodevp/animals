import { CardHeaderContainer, PetName, PetProps } from './styles';
import { IoMale, IoFemale } from 'react-icons/io5';
export function CardHeader({ name, gender }) {
  return (
    <CardHeaderContainer>
      <PetName>{name}</PetName>
      <PetProps>{gender == 'female' ? <IoFemale /> : <IoMale />}</PetProps>
    </CardHeaderContainer>
  );
}
