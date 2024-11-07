import styled from "styled-components";

//모달
export const Wrapper = styled.div<{ modalState: boolean }>`
  width: 90%;
  max-width: 400px;
  height: 500px;
  border: 1px solid black;
  border-radius: 10px;
  display: ${(props) => (props.modalState === true ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  background-color: white;
  padding: 1.5rem;

  & > p:nth-of-type(1) {
    font-size: 30px;
    font-weight: 700;
    letter-spacing: -1px;
    padding-bottom: 5px;
  }

  & > p:nth-of-type(2) {
    font-size: 14px;
    padding-bottom: 2rem;
    color: rgba(0, 0, 0, 0.5);
  }

  & > p:nth-of-type(3) {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.8);
    padding-bottom: 5px;
  }

  & > p:nth-of-type(4) {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    line-height: 16px;
    padding-bottom: 40px;
  }
`;

//딤드배경
export const Background = styled.div<{ modalState: boolean }>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  display: ${(props) => (props.modalState === true ? "block" : "none")};
  opacity: 0.8;
`;

//모달상단
export const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 150px;

  & > p {
    font-size: 12px;
  }

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-size: 14px;
    font-weight: 200;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 20px;
  }

  & > span:hover {
    cursor: pointer;
  }
`;

export const SiteBtn = styled.span`
  font-size: 12px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  & > a {
    text-decoration: none;
    color: black;
  }
`;
