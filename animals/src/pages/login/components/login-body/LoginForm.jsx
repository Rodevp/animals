import { LoginBodyContainer, LoginFormContainer, FormButtonContainer, LoginButtons,} from './styles';

import { Input } from '../inputs'
import { SubmitButton } from '../submit-button'
import { useState } from 'react';

export function LoginForm() {

  const [isRegisterOpen, setRegisterState] = useState(true);

  function changeForm(e){
    e.preventDefault();
    if(e.target.textContent == "registro") setRegisterState(true)
    else setRegisterState(false)
  }

  return (
    <LoginBodyContainer>
      <LoginFormContainer>
        <FormButtonContainer>
          <LoginButtons onClick={(e) => changeForm(e)} >registro</LoginButtons>
          <LoginButtons onClick={(e) => changeForm(e)} >login</LoginButtons>
        </FormButtonContainer>

        <Input text="correo electrónico" />
        <Input text="contraseña" />

        {isRegisterOpen && <SubmitButton text="Registrarme"  /> }
        {!isRegisterOpen && <SubmitButton text="Iniciar Sesión"  />  }

      </LoginFormContainer>
    </LoginBodyContainer>
  );
}
