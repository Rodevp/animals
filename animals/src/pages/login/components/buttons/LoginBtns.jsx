import { PuppyfyLoginButton, IconAlignment, ButtonsContainer, LoginWithGoogle } from './styles';
import { IoPaw } from 'react-icons/io5';

export function LoginBtns() {
  return (
    <ButtonsContainer>
      <PuppyfyLoginButton>
        Iniciar Sesión
        <IconAlignment>
          <IoPaw />
        </IconAlignment>
      </PuppyfyLoginButton>
      <LoginWithGoogle>O inicia sesión con</LoginWithGoogle>
    </ButtonsContainer>
  );
}
