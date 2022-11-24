import { InputBox, Labels, FormInputs } from './styles'

export function Input({ text }){
    return (<>
        <InputBox>
          <Labels>{ text }</Labels>
          <FormInputs />
        </InputBox>
    </>)
}