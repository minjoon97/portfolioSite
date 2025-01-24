import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  padding: 250px 0;
  position: relative;
`;

export const Title = styled.p`
  letter-spacing: -2px;
  font-size: 3rem;
  font-weight: 700;
`;

export const Population = styled.p`
  padding-top: 8px;
  padding-bottom: 30px;
  color: rgba(0, 0, 0, 0.5);
`;

const SkillDiv = styled.div`
  padding-top: 20px;

  & > span {
    font-size: 0.9rem;
    padding: 4px 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    opacity: 0.6;
  }

  & > p {
    padding: 1rem;
    line-height: 22px;
    white-space: pre-wrap;
    opacity: 0.8;
  }
`;

export const Language = styled(SkillDiv)``;
export const Framework = styled(SkillDiv)``;
export const Smdc = styled(SkillDiv)``;
export const Tool = styled(SkillDiv)``;

export const Visual = styled.div`
  padding: 30px 0;
  display: flex;
  gap: 8px;
`;

export const Intro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 2rem;
  flex: 1;
`;

export const Color = styled.div<{ color: string[] }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 2rem;
  flex: 1;
  display: flex;

  & > div:nth-of-type(1) {
    width: 30px;
    height: 10px;
    border-radius: 4px;
    background-color: ${(props) => props.color[0]};
  }

  & > div:nth-of-type(2) {
    width: 30px;
    height: 10px;
    border-radius: 4px;
    background-color: ${(props) => props.color[1]};
  }

  & > div:nth-of-type(3) {
    width: 30px;
    height: 10px;
    border-radius: 4px;
    background-color: ${(props) => props.color[2]};
    border: ${(props) =>
      props.color[2] === "#ffffff" ? "1px solid rgba(0, 0, 0, 0.1)" : ""};
  }
`;

export const Info = styled(SkillDiv)``;
export const Mywork = styled(SkillDiv)``;
export const Retrospective = styled(SkillDiv)``;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 40px;
`;

export const SiteBtn = styled.span`
  display: inline-block;
  height: 40px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-size: 14px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

export const GitHubBtn = styled.span`
  display: inline-block;
  height: 40px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-size: 14px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

export const GoBack = styled.div`
  position: absolute;
  top: 150px;
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
