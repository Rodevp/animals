import { PetLooksAndDescription, PetImageContainer, Image, ImageDescription } from './styles';

export function PetImage({ imageSRC }) {
  return (
    <PetLooksAndDescription>
      <PetImageContainer>
        <Image src={imageSRC} alt='imagen de la mascota'></Image>
      </PetImageContainer>
      <ImageDescription>Hermosa perrita Bagel de 3 meses vacunada y desparasitada</ImageDescription>
    </PetLooksAndDescription>
  );
}
