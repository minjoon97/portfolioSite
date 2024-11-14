import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  padding-top: 300px;
  position: relative;

  & > p:nth-of-type(2) {
    padding-top: 8px;
    color: rgba(0, 0, 0, 0.5);
  }

  & > p:nth-of-type(3) {
    padding-top: 40px;
    color: rgba(0, 0, 0, 0.8);
  }

  & > p:nth-of-type(4) {
    padding-top: 15px;
    color: rgba(0, 0, 0, 0.6);
  }

  & > a {
    display: inline-block;
    padding-top: 50px;
  }
`;

export const TItle = styled.p`
  letter-spacing: -2px;
  font-size: 3rem;
  font-weight: 700;
`;

export const SiteBtn = styled.span`
  display: inline-block;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-size: 14px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

export const GoBack = styled.div`
  position: absolute;
  top: 200px;
  left: 0;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  & > img {
    opacity: 0.5;
  }

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
`;
