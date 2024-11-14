import { useState } from "react";

import { Wrapper } from "./AboutCss";
import AboutModal from "../../components/AboutModal/AboutModal";

const About = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <Wrapper
        onClick={() => {
          setModalState(true);
        }}
      >
        about · 710 portfolio
      </Wrapper>
      <AboutModal
        modalState={modalState}
        setModalState={setModalState}
      ></AboutModal>
    </>
  );
};

export default About;
