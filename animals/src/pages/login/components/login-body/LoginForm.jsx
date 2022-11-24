import {
  LoginBodyContainer,
  LoginFormContainer,
  FormButtonContainer,
  LoginButtons,
} from './styles';

import { Input } from '../inputs'
import { SubmitButton } from '../submit-button'

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

        <SubmitButton text="lolol"  />

      </LoginFormContainer>
    </LoginBodyContainer>
  );
}
