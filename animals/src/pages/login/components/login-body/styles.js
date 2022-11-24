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

  &:active, &:focus{
    color: #968E8E;
  }
`;
