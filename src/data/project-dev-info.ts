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
  githubUrl: string;
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
    githubUrl: "",
  },
  {
    title: "CINE6IX",
    population: "기획 4인 / 프론트엔드 개발 1인",
    intro: "영화 정보 사이트",
    color: ["#ffba4c", "#000000", "#ffffff"],
    language: "Vanilla JavaScript / HTML5 / CSS3",
    framework: "",
    state_management_data_communication: "Fetch Api",
    library_service: "",
    tool: "Git / Github / Notion / Slack / Figma",
    info: `TMDB Open API를 사용하여, 바닐라 자바스크립트로 개발한 프로젝트입니다.

주요기능

🎥 영화 검색
🎬 정보 열람 및 한줄평 작성
📊 최신영화 및 카테고리 별 영화정보 열람`,
    mywork: "",
    Retrospective: `디자인부터 반응형ui, ajax를 활용한 기능개발까지 총 2주 정도의 시간동안 진행하였습니다.
프로젝트 규모와 서브페이지가 없는 토이프로젝트임을 생각하면 React의 필요성이 느껴지지 않는 사이트라는 생각이 들었습니다.
Open API를 통한 데이터 요청 및 응답 처리가 주요 기술이었으며, 비동기함수들을 다루면서 promise와 async await 등에 대한 경험치를 쌓을 수 있었습니다.

query를 이용한 api fetch를 간단하게 정리하자면, API 호출 URL을 구성하고, 검색 혹은 리스트업 함수를 구현한 뒤 이벤트 리스너를 설정하였습니다.

백엔드가 없는 구조였기에, 한줄평같이 간단한 데이터의 저장은 네트워크요청이 필요없는 localStorage를 사용하였고, pagination은 빠른 개발보다 그 원리를 익히고자 하는 학습목적에서 라이브러리가 아닌 커스텀으로 제작하였습니다.
figma와 slack을 통해 4명이 기획을 함께 진행했고, 디자인부터 개발은 각자 진행하였습니다. 배포는 github pages를 이용하였습니다.`,
    siteUrl: "https://minjoon97.github.io/CINE6IX/",
    githubUrl: "https://github.com/minjoon97/CINE6IX",
  },
  {
    title: "야!소풍어때?",
    population: "기획 5인 / 프론트엔드 개발 1인",
    intro: "국내 축제, 숙소 및 관광지 안내 사이트",
    color: ["#3B2DB5", "#D9D9D9", "#ffffff"],
    language: "TypeScript / HTML5 / CSS3",
    framework: "React / Vite",
    state_management_data_communication: "Zustand / Fetch Api",
    library_service: "",
    tool: "Git / Github / Notion / Slack / Figma",
    info: `React와 TypeScript를 사용하여 제작하였으며, 무한스크롤 및 찜하기 기능 등을 구현하였습니다.

주요기능

🎉 축제 / 숙소 / 관광지 지역별 검색
💖 아이템 찜하기`,
    mywork: "",
    Retrospective: `TypeScript를 처음으로 사용하였는데, 타입을 확실하게 지정한다는 점이 버그를 예방하고 디버깅하는데에 안정적인 느낌을 줘서 좋았습니다.
    
처음에는 전역 상태 라이브러리를 사용하지 않고, 개발을 시작하였는데, Props drilling의 지옥을 경험했습니다.
컴포넌트의 종속성에 따라, 많게는 6번 정도의 props drilling이 발생했고, 상태의 일관성과 동기화에 불편함을 크게 느꼈습니다. 또한, 불필요한 리렌더링 등으로 인한 성능저하 등의 문제가 있었습니다. 
그럼에도 저는 프로젝트 기간 내에 프로젝트를 마무리하기위해 코드를 더럽게 붙여나가기 시작했고, 결국 마지막까지 프로젝트를 끝마치지 못했습니다.

프로젝트를 제대로 마무리하고 싶었던 저는 프로젝트 기간이 끝난 뒤에, 그 다음 프로젝트 기간 사이에 저 스스로 이 프로젝트를 처음부터 다시 시작해보기로 마음먹었습니다.
이번에는 전역 상태 라이브러리인 Zustand를 사용하며 그 편리함을 제대로 느낄 수 있었고, 일주일 정도의 시간을 몰두하여 짧은 기간 내에 프로젝트를 마무리 할 수 있었습니다.
Zustand를 선정한 데에는 프로젝트의 규모와 시간을 고려하여, 간단한 설정과 적은 보일러플레이트 그리고 그 직관성에 이점이 있었기 때문입니다.
또한 프로젝트를 다시 개발하면서 바닐라js였다면 코드의 직관성 그리고 로직의 정리 등의 측면에서 보수하기가 힘들었을 것인데, React의 장점인 안정성과 유지보수성을 다시한번 느낄 수 있었습니다.
추가적으로, 찜하기는 CINE6IX와 마찬가지로 local Storage를 사용하였고, 데이터는 공공데이터 포털의 한국관광공사 - 국문 관광정보 서비스 Open Api를 사용하였습니다.
      `,
    siteUrl: "https://minjoon97.github.io/yasoaV2/",
    githubUrl: "https://github.com/minjoon97/yasoaV2",
  },
  {
    title: "Moodi",
    population: "백엔드 개발 1인 / 프론트엔드 개발 4인 팀프로젝트",
    intro: "마이크로 감정 블로그",
    color: ["#FF480E", "#FFBB80", "#F8F8F8"],
    language: "TypeScript / HTML5 / CSS3",
    framework: "React / Vite / Styled-Components",
    state_management_data_communication: "Zustand / ReactQuery / axios",
    library_service: "React Calendar / Intersection Observer",
    tool: "Git / Github / Notion / Slack / Postman / ESLINT / Prettier / Figma",
    info: `개인의 감정을 담은 일기를 작성하면 AI가 노래를 추천해줌으로서 함께 포스팅하고 공유할 수 있는 마이크로블로그입니다.
    
주요기능

📙 감정 일기 작성 및 조회
🤖 AI를 활용한 음악 추천
🎹 Spotify, Youtube API를 활용한 음악 감상
📈 감정 분석 그래프 조회
📅 감정 달력 조회
😊 리액션 버튼 기능
`,
    mywork: "",
    Retrospective: `CRUD기능을 탑재한 협업 프로젝트였으며, 협업에서의 충돌을 막기위해 폴더구조 및 코드컨벤션 등을 매우 상세하게 정하고 개발을 진행했습니다.

폴더구조는 FSD(Feature-Sliced Design)를 사용했으며, 재사용컴포넌트를 feature단위로 합치고, 그 부분을 또 widget으로, 결과적으로 page에서는 widget들을 조립하는 형식으로 계층구조에 맞게 컴포넌트를 설계하는 것이 장점으로 느껴졌지만, 익숙하지 않은 구조라서 학습곡선이 있었던 부분은 단점으로 느껴졌습니다. 특히 시간이 길지 않았던 프로젝트였던 만큼, 장점보다는 단점이 더 부각되어 보였습니다.

props를 이용한 조건부 css를 사용하기 위하여 Styled-Components를 사용하였는데, 가독성 측면에서도 큰 이점이 있음을 느낄 수 있었고, 태그에 컴포넌트명을 붙이는 것이 유지보수에서 도움이 됨을 느꼈습니다.

React-query는 무한스크롤 구현을 위하여 도입하였는데, key값을 통한 관리와 api재호출을 통해 자동으로 최신상태를 동기화 해주는 친절함과 isPending을 통한 중복호출 방지, 캐싱 시스템 등의 다양한 기능을 사용하며 React-Query의 강력함을 느낄 수 있었습니다.

마지막으로, 이전에는 fetch를 사용했었는데, JSON 데이터 자동 변환과 크로스브라우징 이슈를 잡기위해 axios를 도입하였습니다.
`,
    siteUrl: "https://moodi.life/",
    githubUrl: "https://github.com/prgrms-fe-devcourse/NFE1-1-3-MOODI",
  },
  {
    title: "손모아",
    population: "백엔드 개발 4인 / 프론트엔드 개발 3인 팀프로젝트",
    intro: "구호활동 연결 플랫폼",
    color: ["#62a6ff", "#2382ff", "#ffd900"],
    language: "TypeScript / HTML5 / CSS3",
    framework: "React / Vite / Styled-Components",
    state_management_data_communication:
      "Zustand / ReactQuery / MSW / SSE / axios / axios-intercepter / persist",
    library_service:
      "KakaoMaps / React DatePicker / Lodash / Intersection Observer / React Toastify / EventSourcePollyfill",
    tool: "Git / Github / Notion / Slack / Swagger / ESLINT / Prettier / Figma",
    info: `손모아의 목표는 사회지원 활동 참여를 쉽게 만들자 입니다. 전화, 방문 등 기존의 복잡한 절차의 불편함을 해소해 접근성을 향상 시키기 위해 이 프로젝트를 기획하였습니다.
도움이 필요하지만 모집 방법이 게시글 등록이 전부였던 기관들에게 봉사자에게 직접 도움을 요청할 수 있게 하여 봉사자와 기관 간의 커뮤니케이션을 활성화할 수 있고, 봉사 시간에 따라 티어를 부여하고 "이 주의 봉사왕" 랭킹과 같은 게이미피케이션(Gamification)을 통해 봉사자들은 성취감을 느낄 수 있습니다.

주요기능

기관/봉사자
🔍 필터를 통한 모집글 검색
🌎 지도를 통한 모집글 검색
📃 커뮤니티 게시 및 댓글 등록
📪 쪽지 기능
🔔 실시간 알림
😊 마이페이지 관리

기관
📝 모집글 등록 및 수정
🖐 지원자 수락/반려 및 정산

봉사자
🙋‍♂️ 활동 지원
✍ 리뷰 작성
`,
    mywork:
      "기획 및 디자인, 메인페이지, 도움요청글 관련 기능, 라우팅처리, 로그인 및 토큰관리, 알림 기능",
    Retrospective: `api요청에서의 프론트와 백의 조율사항에 대해 많은 점을 배울 수 있었던 프로젝트 였습니다. SSE, httpOnly토큰, 에러코드 기반 디버깅 등 여러가지 이슈에 따른 커뮤니케이션의 중요성을 다시 한번 느꼈고, 그만큼 경험치도 쌓을 수 있어서 좋았습니다.
백엔드의 api가 완료되지 않았을 때, 프론트에서 자체적으로 api요청을 테스트하고 오류코드를 확인하기 위하여 MSW를 도입하여 테스트하였습니다. 실제 API와 동일한 개발 경험, 다양한 상황 테스트 용이 등의 장점이 있었고, 실제 API로 전환하는 과정이 매우 간단하다는 점이 가장 인상적이었습니다.

폴더구조는 이전 프로젝트에서 사용했던 FSD구조에서 장점으로 느꼈던 '컴포넌트의 계층구조'와 ui와 logic을 분리하여 관심사를 분리하는 부분을 가져오되, 저희가 편한 방법으로 커스텀하여 진행하였습니다.

알람 기능은 간단한 단방향 소통이기 때문에 SSE를 사용하였고, WebSocket과 달리 지속적인 양방향 연결을 유지할 필요가 없어 서버 리소스를 적게 사용하며, 구현이 비교적 간단하다는 장점이 있었습니다.

프로젝트를 짧은 기간 안에 마무리 하면서, 사용자 경험 측면에서 어떤 부분이 우선순위에 있는지를 생각해 볼 수 있었던 장점도 있었지만, 그만큼 디버깅이나 최적화 측면에서는 시간이 더 있었으면 어땠을까 하는 아쉬움도 있었습니다. 그래서 데브코스가 끝난 뒤에도 약 한달 반간 데이터 구조 변경 및 리펙토링 / 성능최적화(시맨틱태그와 meta태그를 이용한 SEO최적화 및 lighthouse점수개선) / 기능추가 등을 진행했습니다.

기존에는 api를 요청할 때, 쿠키에 들어오는 httpOnly토큰을 자동으로 header에 담아서 사용하였으나, httpOnly토큰은 프론트에서 접근이 불가하니 localhost에서 테스트가 어려웠습니다.
이로 인해 작업시간이 배로 걸리는 이슈가 발생하여, 로그인api 응답값의 header에서 jwt토큰을 받는 것으로 변환하였으며, api 요청 시 header에 jwt토큰을 넣어서 보내는 것으로 수정하였습니다. 하지만 SSE는 header에 수동으로 토큰을 담는 것이 불가능하다는 추가적인 이슈가 발생하여, EventSourcePollyFill을 사용하여 이슈를 해결하였습니다.
로그인정보는 접근이 가능해진 jwt토큰을 디코딩하여 zustand에 로그인정보를 저장하되, 새로고침 시 초기화를 막기위한 persist를 사용하였습니다.
백엔드와 프론트엔드의 토큰 전달과정에서의 다양한 이슈를 접할 수 있는 유익한 경험이었다고 생각합니다.
`,
    siteUrl: "https://www.somemore.site/",
    githubUrl:
      "https://github.com/prgrms-web-devcourse-final-project/WEB1_1_Bongdari_FE",
  },
];
