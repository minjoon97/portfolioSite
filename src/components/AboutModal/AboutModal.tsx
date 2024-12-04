import { Dispatch, SetStateAction } from "react";
import { Wrapper, Background, CloseBtn, IconWrapper } from "./AboutModalCss";

interface AboutModalProps {
  modalState: boolean;
  setModalState: Dispatch<SetStateAction<boolean>>;
}

const AboutModal: React.FC<AboutModalProps> = ({
  modalState,
  setModalState,
}) => {
  return (
    <>
      <Background $modalState={modalState}></Background>
      <Wrapper $modalState={modalState}>
        <CloseBtn
          onClick={() => {
            setModalState(false);
          }}
        >
          <img src="closeicon.svg" alt=""></img>
        </CloseBtn>
        <p>about</p>
        <p>
          My journey as a developer began as an intern in a development team
          during my final semester, where I gained practical experience through
          intranet maintenance and building automation processes. Later,
          recognizing the importance of UI/UX in frontend development, I worked
          in an agency's design team, developing a comprehensive perspective
          that bridges design and development through more than 20 projects.
          Currently, I'm gaining team project experience at Programmers
          DevCourse, and I've created this{` `}
          <span>simple and intuitive portfolio</span> that encompasses both my
          development and design capabilities. Through minimal design using
          geometric shapes and interactive elements implemented in React, you
          can experience my pursuit of clean code and user-friendly design
          principles.
        </p>
        <p>Copyright ⓒ 2024 Minjoon Kim. All Right Reserved</p>
        <IconWrapper>
          <img src="reacticon.svg" alt=""></img>
          <img src="typescripticon.svg" alt=""></img>
        </IconWrapper>
      </Wrapper>
    </>
  );
};

export default AboutModal;
