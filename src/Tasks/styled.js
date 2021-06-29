import styled, { css } from "styled-components";

export const List = styled.ul`
  padding: 0px;
`;

export const Item = styled.li`
  list-style: none;
  padding: 20px;
  border-bottom: 1px solid #838586;
  display: grid;
  align-items: center;
  word-break: break-all;
  grid-template-columns: 35px auto 40px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  margin-left: 10px;
  margin-right: 10px;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  color: #fff;
  transition: 0.5s;
  cursor: pointer;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: #008000;
      &:hover background-color: #008000b7;
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: #eb293c;
      &:hover background-color: #eb293cb4;
    `}
`;
