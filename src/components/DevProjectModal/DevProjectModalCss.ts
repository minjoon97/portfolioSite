import styled from "styled-components";

//모달
export const Wrapper = styled.div<{ modalState: boolean }>`
  width: 90%;
  max-width: 800px;
  height: 500px;
  display: ${(props) => (props.modalState === true ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  padding: 1.5rem;

  & > p:nth-of-type(1) {
    font-size: 60px;
    font-weight: 700;
    letter-spacing: -1px;
    padding-bottom: 10px;
    color: white;
  }

  & > p:nth-of-type(2) {
    font-size: 14px;
    font-weight: 100;
    padding-bottom: 3rem;
    color: rgba(255, 255, 255, 0.5);
  }

  & > p:nth-of-type(3) {
    font-size: 14px;
    font-weight: 100;
    color: rgba(255, 255, 255, 0.8);
    padding-bottom: 10px;
    color: white;
  }

  & > p:nth-of-type(4) {
    font-size: 14px;
    font-weight: 100;
    color: rgba(255, 255, 255, 0.6);
    line-height: 16px;
    padding-bottom: 40px;
    color: white;
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
  transition: 0.2s;
  visibility: ${(props) => (props.modalState === true ? "visibla" : "hidden")};
  opacity: ${(props) => (props.modalState === true ? 0.95 : 0)};
  z-index: 9999;
`;

//모달상단
export const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  & > p {
    font-size: 12px;
    font-weight: 100;
    color: rgba(255, 255, 255, 0.7);
  }

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    font-size: 20px;
    font-weight: 200;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    color: white;

    & > img {
      width: 20px;
    }
  }

  & > span:hover {
    cursor: pointer;
  }
`;

export const SiteBtn = styled.span`
  font-size: 12px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  & > a {
    text-decoration: none;
    color: white;
  }
`;
