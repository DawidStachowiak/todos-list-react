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

export const Buttons = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  color: ${({theme})=>theme.colors.white};
  transition: 0.5s;
  cursor: pointer;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: ${({theme})=>theme.colors.japaneseLaurel};
      &:hover background-color:${({theme})=>theme.colors.japaneseLaurelLight};
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({theme})=>theme.colors.alizarinCrimson};
      &:hover background-color: ${({theme})=>theme.colors.alizarinCrimsonLight};
    `}
`;
