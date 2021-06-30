import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 10px 10px;
  display: grid;
  background: white;
  grid-row-gap: 2px;
  grid-auto-rows: minmax(65px, auto);

  @media (max-width: 768px) {
    margin: 10px 15px;
  }
`;

export const Item = styled.div`
  border-bottom: 3px solid #efefef;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  grid-gap: 10px;
  justify-content: space-between;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const WrapperHeader = styled.h2`
  margin-left: 20px;
  font-size: 19px;
  padding: 5px;
`;
