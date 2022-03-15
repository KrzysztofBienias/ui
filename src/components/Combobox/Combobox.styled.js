import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 200px;
  align-items: flex-start;
`;

export const StyledCombobox = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const StyledOptions = styled.ul`
  width: 100%;
  border: 3px solid black;
  border-top: none;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: block;
    width: 100%;
    padding: 15px 10px;
  }

  li:hover {
    background-color: #f7ec9e !important;
  }
`;

export const StyledInputWrapper = styled.div`
  width: 100%;
  position: relative;
  border: 3px solid black;
  padding: 2px;
  min-height: 50px;

  &:focus {
    outline: none;
  }

  input {
    width: 100%;
    height: 100%;
    border: none;

    &:focus {
      outline: none;
    }
  }
`;

export const SelectedItem = styled.span`
  display: inline-block;
  background-color: #f9e852;
  padding: 2px 4px;
  margin: 2px;

  button {
    border: none;
    background-color: transparent;
  }
`;

export const DropdownToggle = styled.button`
  font-size: 25px;
  position: absolute;
  right: 5px;
  top: 0;
  height: 100%;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
