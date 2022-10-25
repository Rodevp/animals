import { PetLooksAndDescription, PetImageContainer, Image, ImageDescription } from './styles';

export function PetImage() {
  return (
    <PetLooksAndDescription>
      <PetImageContainer>
        <Image
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMHbSEdoPnRudLn9bjqpwyohVHXe1k5QAVeg&usqp=CAU'
          alt='imagen de la mascota'
        ></Image>
      </PetImageContainer>
      <ImageDescription>Hermosa perrita Bagel de 3 meses vacunada y desparasitada</ImageDescription>
    </PetLooksAndDescription>
  );
}
