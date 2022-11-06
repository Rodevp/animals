import {
  LoginBodyContainer,
  LoginFormContainer,
  FormButtonContainer,
  LoginButtons,
  Labels,
  FormInputs,
} from './styles';

export function LoginForm() {
  return (
    <LoginBodyContainer>
      <LoginFormContainer>
        <FormButtonContainer>
          <LoginButtons>registro</LoginButtons>
          <LoginButtons>login</LoginButtons>
        </FormButtonContainer>

        <label htmlFor=''>
          <Labels>correo electrónico</Labels>
          <FormInputs />
        </label>

        <label htmlFor=''>
          <Labels>contraseña</Labels>
          <FormInputs />
        </label>
      </LoginFormContainer>
    </LoginBodyContainer>
  );
}
