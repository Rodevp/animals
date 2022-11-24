import { PuppyfyLoginButton, IconAlignment, ButtonsContainer, LoginWithGoogle } from './styles';
import { FcGoogle } from 'react-icons/fc';

export function LoginBtns() {
  return (
    <ButtonsContainer>
      <LoginWithGoogle>
        O inicia sesión con
        <IconAlignment>
          <FcGoogle />
        </IconAlignment>
      </LoginWithGoogle>
    </ButtonsContainer>
  );
}
