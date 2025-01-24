import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  padding-top: 340px;
`;

export const BoxList = styled.ul`
  display: flex;
  gap: 1rem;
`;

export const ContactBox = styled.li`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: 0.2s;
  height: 160px;
  flex: 1;

  & > a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    gap: 2rem;

    & > img {
      width: 40px;
    }
  }

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;
