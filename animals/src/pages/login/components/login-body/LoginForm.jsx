import {
  LoginBodyContainer,
  LoginFormContainer,
  FormButtonContainer,
  LoginButtons,
  Labels,
  FormInputs,
  InputBox,
} from './styles';

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
      </LoginFormContainer>
    </LoginBodyContainer>
  );
}
