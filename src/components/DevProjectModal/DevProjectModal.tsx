import { Dispatch, SetStateAction } from "react";
import { Wrapper, Background, ModalTop, SiteBtn } from "./DevProjectModalCss";
import { projectDevInfo } from "../../data/project-dev-info";

interface DevProjectModalProps {
  clickedData: number;
  modalState: boolean;
  setModalState: Dispatch<SetStateAction<boolean>>;
}

const DevProjectModal: React.FC<DevProjectModalProps> = ({
  clickedData,
  modalState,
  setModalState,
}) => {
  return (
    <>
      <Background
        onClick={() => {
          setModalState(false);
        }}
        modalState={modalState}
      ></Background>
      <Wrapper modalState={modalState}>
        <ModalTop>
          <p>ABOUT</p>
          <span
            onClick={() => {
              setModalState(false);
            }}
          >
            x
          </span>
        </ModalTop>
        <p>{projectDevInfo[clickedData].title}</p>
        <p>{projectDevInfo[clickedData].population}</p>
        <p>{projectDevInfo[clickedData].tool}</p>
        <p>{projectDevInfo[clickedData].info}</p>
        <SiteBtn>
          <a
            href={projectDevInfo[clickedData].siteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            사이트 바로가기
          </a>
        </SiteBtn>
      </Wrapper>
    </>
  );
};

export default DevProjectModal;
