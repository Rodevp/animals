import styled from 'styled-components';

export const PetLooksAndDescription = styled.div`
  width: 292px;
  margin: 30px auto;
  text-align: center;
`;

export const PetImageContainer = styled.figure`
  width: 292px;
  height: 230px;
  border-radius: 6px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`;

export const ImageDescription = styled.p`
  background-color: #379e6c;
  color: #ffffff;
  border: 1px solid #1c6758;
  width: 292px;
  height: 88px;
  border-radius: 6px;
  margin: 20px 0;
  font-family: 'Courier New', Courier, monospace; // CAMBIAR POR MONTSERRAT
  text-align: center;
  padding: 20px 8px;
`;
