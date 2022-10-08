import './App.css';
import { IoHome } from 'react-icons/io5';
import styled from 'styled-components';

import { ButtonComponent, PopupMenu } from './components';

export const Title = styled.h1`
  font-size: 6em;
  color: lightseagreen;
`;

function App() {
  return (
    <>
      <Title>Hello, World!</Title>
      <ButtonComponent value='Home' Icon={<IoHome />} />
    </>
  );
}

export default App;
