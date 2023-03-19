import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: #ffffff;
  min-height: 450px;
  text-align: center;
`;

export const Button = styled.button`
  border-radius: 5px;
  padding: 5px 10px;
  width: 100%;
  border: 1px solid green;
  cursor: pointer;
  background-color: green;
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  text-shadow: black 1px 1px 2px;
  font-weight: bold;
  margin: 10px 0px 0px;
  box-shadow: black 1px 2px 5px;

  &:hover {
    background-color: blue;
  }
`;
