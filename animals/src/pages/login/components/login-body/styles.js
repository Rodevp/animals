import styled from 'styled-components';

export const LoginBodyContainer = styled.div`
  color: #fff;
  font-family: 'Montserrat', sans-serif;
`;

export const LoginFormContainer = styled.form`
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  border-bottom: 1px solid #fff;
`;

export const LoginButtons = styled.button`
  outline: none;
  border: none;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-size: 15px;
  height: 30px;
  background-color: transparent;
`;

export const PuppyfyLoginButton = styled.button.attrs({ type: 'submit' })`
  width: 250px;
  height: 40px;
  margin: 30px auto;
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