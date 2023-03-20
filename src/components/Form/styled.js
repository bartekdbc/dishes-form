import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.white};
  border-radius: 10px;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledForm = styled.div`
  padding: 30px 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    padding: 20px 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    padding: 10px 20px;
  }
`;

export const Title = styled.h1`
  font-weight: 700px;
  font-size: 26px;
  padding-bottom: 2px;
  margin-top: 0;
`;

export const ExtraTitle = styled.p`
  font-weight: 500;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 14px;
  }
`;

export const FieldWrapper = styled.div`
  margin-bottom: 16px;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 700;
  padding-bottom: 4px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.color.snuff};
  border-radius: 5px;
  transition: border 0.5s;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.color.teal};
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.red};
  margin-top: 5px;
  transition: 0.3s;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  width: 100%;
  padding: 8px 15px;
  border: 1px solid ${({ theme }) => theme.color.teal};
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0px 0px;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray};
    border: 1px solid ${({ theme }) => theme.color.gray};
    cursor: not-allowed;
  }
`;

export const StyledImage = styled.img`
  max-width: 400px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    max-width: 350px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    max-width: 300px;
    display: block;
    margin: 0 auto;
  }
`;
