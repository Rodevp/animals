import {
  LoginBodyContainer,
  LoginFormContainer,
  FormButtonContainer,
  LoginButtons,
  PuppyfyLoginButton,
  IconAlignment
} from './styles';

import { Input } from '../inputs'
import { IoPaw } from 'react-icons/io5';

export function LoginForm() {
  return (
    <LoginBodyContainer>
      <LoginFormContainer>
        <FormButtonContainer>
          <LoginButtons>registro</LoginButtons>
          <LoginButtons>login</LoginButtons>
        </FormButtonContainer>

        <Input text="correo electrónico" />
        <Input text="contraseña" />

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
