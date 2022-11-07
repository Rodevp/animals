import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PuppyfyLoginButton = styled.button`
  width: 250px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3d8361;
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 6px;
  font-family: 'Montserrat', sans-serif;
`;

export const IconAlignment = styled.i`
  color: #fff;
  padding-top: 4px;
  margin-left: 12px;
  font-size: 18px;
`;

export const LoginWithGoogle = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: #fff;
  height: 40px;
  width: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  margin-inline: auto;
  margin-top: 30px;
`;
