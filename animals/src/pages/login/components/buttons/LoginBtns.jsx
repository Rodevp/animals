import { PuppyfyLoginButton, IconAlignment } from './styles';
import { IoPaw } from 'react-icons/io5';

export function LoginBtns() {
  return (
    <>
      <PuppyfyLoginButton>
        Iniciar Sesión
        <IconAlignment>
          <IoPaw />
        </IconAlignment>
      </PuppyfyLoginButton>
    </>
  );
}
