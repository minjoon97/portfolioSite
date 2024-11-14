import styled from "styled-components";

//모달
export const Wrapper = styled.div<{ $modalState: boolean }>`
  width: 90%;
  max-width: 800px;
  height: 500px;
  display: ${(props) => (props.$modalState === true ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  padding: 1.5rem;
  color: white;
`;

//딤드배경
export const Background = styled.div<{ $modalState: boolean }>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  transition: 0.2s;
  visibility: ${(props) => (props.$modalState === true ? "visible" : "hidden")};
  opacity: ${(props) => (props.$modalState === true ? 0.95 : 0)};
  z-index: 9999;
`;
