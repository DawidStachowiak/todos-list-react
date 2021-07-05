import styled from "styled-components";

export const ListButtonWrap = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  padding: 5px;
  border: none;
  color: ${({theme})=>theme.colors.teal};
  background: ${({theme})=>theme.colors.white};
  transition: 1s;
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    color: ${({theme})=>theme.colors.bondiBlue};
  }

  &:disabled {
    color: rgba(204, 204, 204, 0.953);
    cursor: not-allowed;
  }
`;
