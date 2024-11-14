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
      <Wrapper $modalState={modalState}></Wrapper>
    </>
  );
};

export default AboutModal;
