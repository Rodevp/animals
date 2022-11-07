import { LoginForm, LoginHeader, LoginBtns } from './components';
import { LoginContainer } from './styled-componts/login-bg';

export function Login() {
  return (
    <LoginContainer>
      <LoginHeader />
      <LoginForm />
      <LoginBtns />
    </LoginContainer>
  );
}
