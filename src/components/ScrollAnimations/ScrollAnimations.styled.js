import styled from 'styled-components';

const imageUrl =
  'https://i.picsum.photos/id/1042/3456/5184.jpg?hmac=5xr8Veg2D_kEQQO6rvGj_Yk8s_N4iq3-eZ9_KclSXNQ';

export const Wrapper = styled.div`
  position: relative;
  font-family: 'Montserrat', 'Helvetica', 'Arial', 'sans-serif';
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px 50px;
`;

export const Hero = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('${imageUrl}');
  background-repeat: no-repeat;
  background-size: cover;
  grid-column: 1 / 3;
  position: relative;
  overflow: hidden;

  h1 {
    margin: 0 auto;
    display: block;
    font-size: 150px;
    font-style: italic;
    font-weight: 800;
    letter-spacing: 1px;
    font-family: 'Montserrat', 'Helvetica', 'Arial', 'sans-serif';
    color: white;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 40vh;
  background-image: url('${imageUrl}');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Article = styled.article`
  position: relative;
  top: 100px;
  text-align: left;
  padding-right: 20%;

  &:last-of-type {
    text-align: right;
    padding-right: 0;
    padding-left: 20%;
  }

  h2,
  p {
    font-family: 'Montserrat', 'Helvetica', 'Arial', 'sans-serif';
  }

  h2 {
    font-size: 40px;
  }

  p {
    font-size: 20px;
    line-height: 1.6;
  }
`;

export const Curtain = styled.div`
  margin-bottom: 300vh;
  width: 100%;
  height: 100vh;
  grid-column: 1 / 3;
  position: relative;
  overflow: hidden;
`;

export const CurtainBackground = styled.div`
  width: 1%;
  height: 100vh;
  background-color: black;
  position: absolute;
  z-index: -1;
`;

export const CurtainImage = styled.img`
  width: 200%;
  height: 200%;
  transform-origin: 50% 50%;
  position: relative;
  left: -50%;
  top: -50%;
`;
