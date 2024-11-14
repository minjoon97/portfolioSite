import { useParams, useNavigate } from "react-router-dom";

import { projectDevInfo } from "../../data/project-dev-info";
import { GoBack, SiteBtn, TItle, Wrapper } from "./DetailPageCss";

const DetailPage = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  if (index) {
    return (
      <Wrapper>
        <GoBack onClick={() => navigate(-1)}>
          <img src="arrow.svg" alt=""></img>
        </GoBack>
        <TItle>{projectDevInfo[Number(index)].title}</TItle>
        <p>{projectDevInfo[Number(index)].population}</p>
        <p>{projectDevInfo[Number(index)].tool}</p>
        <p>{projectDevInfo[Number(index)].info}</p>
        <a
          href={projectDevInfo[Number(index)].siteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiteBtn>사이트 바로가기</SiteBtn>
        </a>
      </Wrapper>
    );
  }
};

export default DetailPage;
