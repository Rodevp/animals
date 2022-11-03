import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  padding: 12px;
  background-color: #1c6758;
  color: #eef2e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and (min-width: 800px) {
    height: 100px;
  }
`;

export const HeaderTitle = styled.p`
  font-family: 'Indie Flower', cursive;
  font-size: 32px;

  @media screen and (min-width: 800px) {
    font-size: 48px;
  }
`;

export const IconHeaderAlignment = styled.i`
  margin: 0 4px;
  display: flex;
  font-size: 30px;
  align-items: center;
  color: #eef2e6;

  @media screen and (min-width: 800px) {
    font-size: 48px;
  }
`;
