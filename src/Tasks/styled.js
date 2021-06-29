import styled, {css} from "styled-components";

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

  ${({hidden}) => hidden && css`
  display:none`
  }
`;
