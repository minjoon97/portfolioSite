import { Dispatch, SetStateAction } from "react";
import { Wrapper, Background } from "./AboutModalCss";

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
      <Background
        onClick={() => {
          setModalState(false);
        }}
        $modalState={modalState}
      ></Background>
      <Wrapper $modalState={modalState}>
        <p>about 710minjoon</p>
        <p>
          My journey as a developer began as an intern in a development team
          during my final semester, where I gained practical experience through
          intranet maintenance and building automation processes. Later,
          recognizing the importance of UI/UX in frontend development, I worked
          in an agency's design team, developing a comprehensive perspective
          that bridges design and development through more than 20 projects.
          Currently, I'm gaining team project experience at Programmers
          DevCourse, and I've created this simple and intuitive portfolio that
          encompasses both my development and design capabilities. Through
          minimal design using geometric shapes and interactive elements
          implemented in React, you can experience my pursuit of clean code and
          user-friendly design principles.
        </p>
      </Wrapper>
    </>
  );
};

export default AboutModal;
