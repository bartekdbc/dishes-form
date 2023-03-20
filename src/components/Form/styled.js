import styled from "styled-components";

export const StyledForm = styled.div`
  background-color: #ffffff;
  border: 1px solid white;
  border-radius: 10px;
  /* box-shadow: black 0px 0px 20px; */
  padding: 30px;
`;

export const Title = styled.h1`
  font-weight: 700px;
  font-size: 22px;
  padding-bottom: 2px;
`;

export const ExtraTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

export const FieldWrapper = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  margin-bottom: 16px;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 700;
  padding-bottom: 4px;
`;

export const StyledInput = styled.input`
  width: 80%;
  padding: 10px;
  border: 2px solid #ddddee;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: 2px solid #14b8a6;
  }
`;

export const ErrorMessage = styled.span`
  font-weight: bold;
  color: #800;
`;

export const Button = styled.button`
  border-radius: 5px;
  width: 100%;
  padding: 8px 15px;
  /* width: 100%; */
  border: 1px solid #14b8a6;
  cursor: pointer;
  background-color: #14b8a6;
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0px 0px;

  &:hover {
    background-color: blue;
  }
`;

export const Image = styled.div`
  background-image: url(${dishImage});
  background-size: cover;
`;
