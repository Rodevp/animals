import styled from 'styled-components';

export const InputBox = styled.label`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Labels = styled.span`
  color: #fff;
  font-size: 10px;
  text-transform: uppercase;
`;

export const FormInputs = styled.input.attrs({ type: 'text' })`
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 1px solid #fff;
  color: #fff;
`;