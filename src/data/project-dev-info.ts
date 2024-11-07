interface ProjectDevInfoType {
  title: string;
  population: string;
  tool: string;
  info: string;
  siteUrl: string;
}

export const projectDevInfo: ProjectDevInfoType[] = [
  {
    title: "CINE6IX",
    population: "기획 4인 / 개발 1인",
    tool: "Vanilla Javascript",
    info: "영화 검색 및 최신/카테고리 별 인기 영화 추천 사이트. 바닐라JS로 작업하였으며 OPEN API를 사용함",
    siteUrl: "https://minjoon97.github.io/CINE6IX/",
  },
  {
    title: "야!소풍어때?",
    population: "기획 5인 / 개발 1인",
    tool: "React / TypeScript",
    info: "국내 지역에 따른 축제, 숙소 및 관광지를 안내하는 사이트. React와 TypeScript를 사용하여 전역라이브러리 없이 제작하였으며, 무한스크롤 및 찜하기 기능 등을 구현함",
    siteUrl: "https://minjoon97.github.io/yasoaV2/",
  },
  {
    title: "Moodi",
    population: "5인 팀프로젝트",
    tool: "React / TypeScript / Zustand / StyledComponents",
    info: "개인의 감정을 담은 일기를 작성하면 AI가 노래를 추천해줌으로서 함께 포스팅하고 공유할 수 있는 마이크로블로그.",
    siteUrl:
      "http://moodi-devcourese-3team.s3-website.ap-northeast-2.amazonaws.com/",
  },
];
