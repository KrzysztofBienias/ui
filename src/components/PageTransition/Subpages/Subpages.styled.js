import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;

  h2 {
    font-size: 100px;
    font-family: 'Cormorant Garamond', serif;
    text-transform: uppercase;
  }
`;

export const Image = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 600px;
  overflow: hidden;
  background-color: beige;
  background: url(${({ img }) => img}) 50% 50% no-repeat;
  background-size: cover;
`;
