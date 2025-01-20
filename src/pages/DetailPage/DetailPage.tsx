import { useParams, useNavigate } from "react-router-dom";

import { projectDevInfo } from "../../data/project-dev-info";
import {
  Color,
  Framework,
  GoBack,
  Info,
  Intro,
  Language,
  Mywork,
  Population,
  Retrospective,
  SiteBtn,
  Smdc,
  Title,
  Tool,
  Visual,
  Wrapper,
} from "./DetailPageCss";

const DetailPage = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  if (index) {
    return (
      <Wrapper>
        <GoBack onClick={() => navigate(-1)}>
          <img src="arrow.svg" alt=""></img>
        </GoBack>
        <Title>{projectDevInfo[Number(index)].title}</Title>
        <Population>{projectDevInfo[Number(index)].population}</Population>
        {projectDevInfo[Number(index)].language && (
          <Language>
            <span>언어</span>
            <p>{projectDevInfo[Number(index)].language}</p>
          </Language>
        )}
        {projectDevInfo[Number(index)].framework && (
          <Framework>
            <span>프레임워크</span>
            <p>{projectDevInfo[Number(index)].framework}</p>
          </Framework>
        )}
        {projectDevInfo[Number(index)].state_management_data_communication && (
          <Smdc>
            <span>상태관리 & 데이터 통신</span>
            <p>
              {
                projectDevInfo[Number(index)]
                  .state_management_data_communication
              }
            </p>
          </Smdc>
        )}
        {projectDevInfo[Number(index)].library_service && (
          <Framework>
            <span>라이브러리</span>
            <p>{projectDevInfo[Number(index)].library_service}</p>
          </Framework>
        )}
        {projectDevInfo[Number(index)].tool && (
          <Tool>
            <span>Tool</span>
            <p>{projectDevInfo[Number(index)].tool}</p>
          </Tool>
        )}
        <Visual>
          <Intro>
            <p>{projectDevInfo[Number(index)].intro}</p>
          </Intro>
          {projectDevInfo[Number(index)].color.length !== 0 && (
            <Color color={projectDevInfo[Number(index)].color}>
              <div></div>
              <div></div>
              <div></div>
            </Color>
          )}
        </Visual>
        {projectDevInfo[Number(index)].info && (
          <Info>
            <span>설명</span>
            <p>{projectDevInfo[Number(index)].info}</p>
          </Info>
        )}
        {projectDevInfo[Number(index)].mywork && (
          <Mywork>
            <span>기여</span>
            <p>{projectDevInfo[Number(index)].mywork}</p>
          </Mywork>
        )}
        {projectDevInfo[Number(index)].Retrospective && (
          <Retrospective>
            <span>회고</span>
            <p>{projectDevInfo[Number(index)].Retrospective}</p>
          </Retrospective>
        )}
        {projectDevInfo[Number(index)].siteUrl && (
          <a
            href={projectDevInfo[Number(index)].siteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiteBtn>사이트 바로가기</SiteBtn>
          </a>
        )}
      </Wrapper>
    );
  }
};

export default DetailPage;
