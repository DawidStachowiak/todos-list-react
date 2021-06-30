import styled from "styled-components";

export const FormElement = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  padding: 11px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  text-align: center;
  transition: 0.3s;
  background-color: #2e747c;
  color: white;
  flex-grow: 0;
  margin-left: 20px;
  transition: 1s;

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin: 10px 0;
  }
  &:hover {
    background-color: #3d858dc9;
    transform: scale(1.1);
  }
`;

export const FormInput = styled.input`
  border-radius: 3px;
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #dfdedf;
  border-radius: 2px;
  margin-left: 15px;

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin: 0px;
  }
`;
