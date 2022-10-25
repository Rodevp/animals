import { PetImageContainer, Image } from './styles';

export function PetImage() {
  return (
    <PetImageContainer>
      <Image
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMHbSEdoPnRudLn9bjqpwyohVHXe1k5QAVeg&usqp=CAU'
        alt='imagen de la mascota'
      ></Image>
    </PetImageContainer>
  );
}
