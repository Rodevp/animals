import { PuppyfyLoginButton, IconAlignment } from './styles'
import { IoPaw } from 'react-icons/io5';

export function SubmitButton({ text }){
    return (<>
    <PuppyfyLoginButton>
        { text }
        <IconAlignment>
          <IoPaw />
        </IconAlignment>
      </PuppyfyLoginButton>
    </>)
}