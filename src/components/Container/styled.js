import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    display: grid;
    margin: 20px;
  }
`;
