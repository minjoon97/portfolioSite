import styled from "styled-components";

//모달
export const Wrapper = styled.div<{ $modalState: boolean }>`
  width: 90%;
  max-width: 600px;
  display: ${(props) => (props.$modalState === true ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  color: white;
  font-family: "Inter", sans-serif;

  & > p:nth-of-type(1) {
    font-size: 40px;
    font-weight: 600;
    padding-bottom: 50px;
  }

  & > p:nth-of-type(2) {
    font-size: 14px;
    padding-bottom: 30px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 100;
    letter-spacing: 1px;
    line-height: 20px;

    & > span {
      font-weight: 300;
      color: white;
    }
  }

  & > p:nth-of-type(3) {
    font-size: 12px;
    padding-bottom: 30px;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 200;
  }
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

export const CloseBtn = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.6);
    cursor: pointer;
  }

  & > img {
    width: 34px;
    opacity: 0.6;
    transition: 0.2s;
  }

  &:hover > img {
    width: 34px;
    opacity: 0.8;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > img:nth-of-type(1) {
    width: 40px;
  }

  & > img:nth-of-type(2) {
    width: 30px;
  }
`;
