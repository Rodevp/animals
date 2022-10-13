import styled from 'styled-components';

export const PopUpMenuContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-color: #3d8361;
  height: 90px;
  width: 190px;
  border-radius: 6px;
  font-weight: 400;
  font-size: 16px;
  position: absolute;
  bottom: 0%;
  right: 10%;
  transform: translateX(-100%);
`;

export const LinkStyles = styled.button`
  display: flex;
  margin: 0;
  background-color: transparent;
  color: #eef2e6;
  border: none;

  &:hover {
    border: none;
  }
`;

export const IconMenuAlignment = styled.i`
  margin: 0 4px;
  display: flex;
  align-items: center;
  color: #eef2e6;
`;
