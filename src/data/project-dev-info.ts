interface ProjectDevInfoType {
  title: string;
  population: string;
  intro: string;
  color: string[];
  language: string;
  framework: string;
  state_management_data_communication: string;
  library_service: string;
  tool: string;
  info: string;
  mywork: string;
  Retrospective: string;
  siteUrl: string;
}

export const projectDevInfo: ProjectDevInfoType[] = [
  {
    title: "PAS",
    population: "개발팀 인턴 / 개발 4인",
    intro: "회사 내 업무자동화를 위한 RPA(자동화프로세스)개발",
    color: [],
    language: "VB.NET / HTML5",
    framework: "",
    state_management_data_communication: "",
    library_service: "",
    tool: "Uipath, Tableau",
    info: `Uipath를 이용한 RPA를 개발하여 회사 내의 psales팀의 반복업무를 자동화시켰습니다.
RPA는 rest api를 기반으로 필요한 데이터정보를 키값으로 저장하고, 타업체의 웹을 크롤링하여 그 value값을 추출하여 기입하는 역할을 했습니다.`,
    mywork:
      "결과적으로 업무속도와 견적작성 수가 눈에 띄게 증가하였으며, 자동화 프로세스가 마치 사원과 같은 역할을 하며 회사 매출에 크게 기여하였습니다.",
    Retrospective: `자동화 프로세스를 개발한다는 것은 단순하게 업무를 진행하는 것이 아닌, 훗날의 업무를 대체해줄 무언가를 만들어 낸다는 것에서 진보적이고 미래지향적이라고 생각했습니다.
  1인분을 하는 것이 아닌, 미래의 10인분을 위한 기반을 마련한다는 측면에서 보면, 프로그래밍이 회사에 미치는 영향이 생각보다 크다고 느꼈습니다.`,
    siteUrl: "",
  },
  {
    title: "CINE6IX",
    population: "기획 4인 / 프론트엔드 개발 1인",
    intro: "영화 검색 및 최신/카테고리 별 인기 영화 추천 사이트",
    color: ["#ffba4c", "#000000", "#ffffff"],
    language: "Vanilla JavaScript / HTML5 / CSS3",
    framework: "",
    state_management_data_communication: "Fetch Api",
    library_service: "",
    tool: "Git / Github / Notion / Slack / Figma",
    info: `TMDB Open API를 사용하여, 바닐라 자바스크립트로 개발한 프로젝트입니다.
    사용자는 영화를 검색하고, 해당 영화에 대한 정보를 모달로 확인할 수 있으며, 최신영화 및 카테고리 별 영화를 열람할 수 있습니다.`,
    mywork: "",
    Retrospective: `디자인부터 반응형ui, ajax를 활용한 기능개발까지 총 2주 정도의 시간동안 진행하였습니다.
      Open API를 통한 데이터 요청 및 응답 처리가 주요 기술이었으며, 비동기함수들을 다루면서 promise와 async await 등에 대한 경험치를 쌓을 수 있었습니다.
      figma와 slack을 통해 4명이 기획을 함께 진행했고, 디자인부터 개발은 각자 진행하였습니다. 배포는 github pages를 이용하였습니다.`,
    siteUrl: "https://minjoon97.github.io/CINE6IX/",
  },
  {
    title: "야!소풍어때?",
    population: "기획 5인 / 프론트엔드 개발 1인",
    intro: "국내 지역에 따른 축제, 숙소 및 관광지를 안내하는 사이트",
    color: ["#3B2DB5", "#D9D9D9", "#ffffff"],
    language: "TypeScript / HTML5 / CSS3",
    framework: "React / Vite",
    state_management_data_communication: "Fetch Api",
    library_service: "",
    tool: "Git / Github / Notion / Slack / Figma",
    info: `React와 TypeScript를 사용하여 제작하였으며, 무한스크롤 및 찜하기 기능 등을 구현하였습니다.
    사용자는 축제 / 숙소 / 관광지를 지역별로 검색할 수 있으며, 마이페이지에서 자신이 찜한 아이템을 확인할 수 있습니다.`,
    mywork: "",
    Retrospective: `처음에는 전역 상태 라이브러리를 사용하지 않고, 개발을 시작하였는데, Props drilling의 지옥을 경험했습니다.
      컴포넌트의 종속성에 따라, 많게는 6번 정도의 props drilling이 발생했고, 파일구조 또한 따로 정해놓지 않은 상태로 하다보니
      타입을 지정하는 것 조차도 굉장히 번거롭고 오류도 많이 발생했습니다.
      그렇게 프로젝트 기간 내에 저는 프로젝트를 마무리하기위해 코드를 더럽게 붙여나가기 시작했고, 결국 마지막까지 프로젝트를 끝마치지 못했습니다.
      프로젝트를 제대로 마무리하고 싶었던 저는 프로젝트 기간이 끝난 뒤에, 그 다음 프로젝트 기간 사이에 저 스스로 이 프로젝트를 처음부터 다시 시작해보기로 마음먹었습니다.
      이번에는 zustand를 사용하며 전역 상태 라이브러리의 편리함을 제대로 느낄 수 있었고, 일주일 정도의 시간을 몰두하여 짧은 기간 내에 프로젝트를 마무리 할 수 있었습니다.
      추가적으로, 찜하기는 local Storage를 사용하였고, 데이터는 공공데이터 포털의 한국관광공사 - 국문 관광정보 서비스 Open Api를 사용하였습니다.
      `,
    siteUrl: "https://minjoon97.github.io/yasoaV2/",
  },
  {
    title: "Moodi",
    population: "백엔드 개발 1인 / 프론트엔드 개발 4인 팀프로젝트",
    intro:
      "개인의 감정을 담은 일기를 작성하면 AI가 노래를 추천해줌으로서 함께 포스팅하고 공유할 수 있는 마이크로블로그.",
    color: ["#FF480E", "#FFBB80", "#F8F8F8"],
    language: "TypeScript / HTML5 / CSS3",
    framework: "React / Vite / Styled-Components",
    state_management_data_communication: "Zustand / ReactQuery / axios",
    library_service: "React Calendar / Intersection Observer",
    tool: "Git / Github / Notion / Slack / Postman / ESLINT / Prettier / Figma",
    info: `주요기능
📙 감정 일기 작성 및 조회
🤖 AI를 활용한 음악 추천
🎹 Spotify, Youtube API를 활용한 음악 감상
📈 감정 분석 그래프 조회
📅 감정 달력 조회
😊 리액션 버튼 기능
`,
    mywork: "",
    Retrospective: `CRUD기능을 탑재한 첫 프로젝트였으며, 폴더구조 및 코드컨벤션 등을 매우 상세하게 정하고 개발을 진행했습니다.
폴더구조는 FSD(Feature-Sliced Design)를 사용했으며, 재사용컴포넌트를 feature단위로 합치고, 그 부분을 또 widget으로, 결과적으로 page에서는 widget들을 조립하는 형식으로 계층구조에 맞게 컴포넌트를 설계하는 것이 장점으로 느껴졌지만, 익숙하지 않은 구조라서 학습곡선이 있었던 부분은 단점으로 느껴졌습니다. 특히 시간이 길지 않았던 프로젝트였던 만큼, 장점보다는 단점이 더 부각되어 보였습니다.`,
    siteUrl: "https://moodi.life/",
  },
  {
    title: "손모아",
    population: "백엔드 개발 4인 / 프론트엔드 개발 3인 팀프로젝트",
    intro: "구호활동 연결 플랫폼",
    color: ["#62a6ff", "#2382ff", "#ffd900"],
    language: "TypeScript / HTML5 / CSS3",
    framework: "React / Vite / Styled-Components",
    state_management_data_communication:
      "Zustand / ReactQuery / MSW / SSE / axios",
    library_service:
      "KakaoMaps / React DatePicker / Lodash / Intersection Observer / React Toastify",
    tool: "Git / Github / Notion / Slack / Swagger / ESLINT / Prettier / Figma",
    info: `손모아의 목표는 사회지원 활동 참여를 쉽게 만들자 입니다. 전화, 방문 등 기존의 복잡한 절차의 불편함을 해소해 접근성을 향상 시키기 위해 이 프로젝트를 기획하게 되었습니다.
도움이 필요하지만 모집 방법이 게시글 등록이 전부였던 기관들에게 봉사자에게 직접 도움을 요청할 수 있게 하여 봉사자와 기관 간의 커뮤니케이션을 활성화할 수 있고, 봉사 시간에 따라 티어를 부여하고 "이 주의 봉사왕" 랭킹과 같은 게이미피케이션(Gamification)을 통해 봉사자들은 성취감을 느낄 수 있습니다.`,
    mywork:
      "기획 및 디자인, 메인페이지, 도움요청글 관련 기능, 라우팅처리, 로그인 및 토큰관리, 알림 기능",
    Retrospective: `api요청에서의 프론트와 백의 조율사항에 대해 많은 점을 배울 수 있었던 프로젝트 였습니다. SSE, httpOnly토큰, 에러코드 기반 디버깅 등 여러가지 이슈에 따른 커뮤니케이션의 중요성을 다시 한번 느꼈고, 그만큼 경험치도 쌓을 수 있어서 좋았습니다.

폴더구조는 이전 프로젝트에서 사용했던 FSD구조에서 장점으로 느꼈던 '컴포넌트의 계층구조'와 ui와 logic을 분리하여 관심사를 분리하는 부분을 가져오되, 저희가 편한 방법으로 커스텀하여 진행하였습니다.

프로젝트를 짧은 기간 안에 마무리 하면서, 사용자 경험 측면에서 어떤 부분이 우선순위에 있는지를 생각해 볼 수 있었던 장점도 있었지만, 그만큼 디버깅이나 최적화 측면에서는 시간이 더 있었으면 어땠을까 하는 아쉬움도 있었습니다. 그래서 데브코스가 끝난 뒤에도 약 한달간 데이터 구조 변경 및 리펙토링 / 성능최적화(시맨틱태그와 meta태그를 이용한 SEO최적화 및 lighthouse점수개선) / 반응형ui구축 등을 진행했습니다.

기술적인 회고로는, 재사용성과 확장성을 고려한 컴포넌트를 결정하는 부분이 가장 어려웠던 것 같고, 쿠키의 토큰을 관리하는 법과 zustand를 이용한 로그인정보를 저장하되, 새로고침 시 초기화를 막기위한 persist사용하는 법 등이 가장 유용했던 경험이었습니다.`,
    siteUrl: "https://www.somemore.site/",
  },
];
