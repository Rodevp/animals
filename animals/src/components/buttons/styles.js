import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  background-color: #1c6758;
  border-radius: 6px;
  color: #eef2e6;
  display: flex;
  flex-direction: ${(props) => (props.iconAlignment === 'left' ? 'row' : 'row-reverse')};
  justify-content: center;
  max-height: 2rem;
  max-width: 6em;
  min-width: 4rem;
  transition: all 0.3s ease;
  border: none;
  padding: 6px;

  &:hover {
    filter: brightness(90%);
  }
`;

export const ButtonValue = styled.span`
  margin: 0 4px;
`;
