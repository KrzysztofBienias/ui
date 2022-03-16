import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

export const StyledHalfBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100vh;
  flex-direction: ${({ isColumn }) => (isColumn ? 'column' : 'row')};
`;

export const StyledText = styled.span`
  font-size: 105px;
  font-weight: bold;
  color: ${({ isWhite }) => (isWhite ? 'white' : 'black')};
`;

export const StyledContent = styled(StyledHalfBox)`
  position: absolute;
  right: -50vw;
`;

export const StyledCurtain = styled(StyledHalfBox)`
  position: absolute;
  right: 0;
  cursor: pointer;
  z-index: 2;

  img {
    width: 50vw;
    position: absolute;
    object-fit: cover;
    max-height: 100%;
    z-index: -1;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 20px;
  max-width: 500px;
`;
