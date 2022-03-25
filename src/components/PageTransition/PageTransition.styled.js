import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
  height: 100vh;
`;

export const Header = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  width: 100%;
  z-index: 1000;
`;

export const Logo = styled.div`
  margin-left: 60px;
  font-size: 30px;
  font-weight: bold;
`;

export const Navigation = styled.ul`
  list-style: none;
  text-align: right;
  margin-right: 60px;

  a {
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;
    text-decoration: none;
  }
`;
