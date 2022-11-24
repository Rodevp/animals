import {
  LoginBodyContainer,
  LoginFormContainer,
  FormButtonContainer,
  LoginButtons,
  Labels,
  FormInputs,
  InputBox,
  PuppyfyLoginButton,
  IconAlignment
} from './styles';

import { IoPaw } from 'react-icons/io5';

export function LoginForm() {
  return (
    <LoginBodyContainer>
      <LoginFormContainer>
        <FormButtonContainer>
          <LoginButtons>registro</LoginButtons>
          <LoginButtons>login</LoginButtons>
        </FormButtonContainer>

        <InputBox>
          <Labels>correo electrónico</Labels>
          <FormInputs />
        </InputBox>

        <InputBox>
          <Labels>contraseña</Labels>
          <FormInputs />
        </InputBox>

        <PuppyfyLoginButton>
        Iniciar Sesión
        <IconAlignment>
          <IoPaw />
        </IconAlignment>
      </PuppyfyLoginButton>

      </LoginFormContainer>
    </LoginBodyContainer>
  );
}
