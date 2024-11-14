import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 30px;
  left: 20px;
  font-size: 12px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  color: black;

  &:hover {
    background-color: black;
    border: 1px solid black;
    color: white;
    cursor: pointer;
  }
`;
