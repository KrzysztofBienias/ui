import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';

export const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 700px;
  height: 400px;
  padding: 40px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const StyledLogo = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  background-image: url(${Logo});
  background-size: cover;
`;
