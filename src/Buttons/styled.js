import styled from "styled-components";

export const ListButtonWrap = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  padding: 5px;
  border: none;
  color: teal;
  background: white;
  transition: 1s;
  cursor: pointer;
  margin-right: 20px;

  &:hover{
    color: rgb(2, 175, 175);
  }

  &:disabled{
    color: rgba(204, 204, 204, 0.953);
  cursor: not-allowed;
  }
`;
