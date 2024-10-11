import "./styles/myreset.css";
import "./styles/font.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import IntroPage from "./pages/IntroPage/IntroPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Header from "./layout/Header/Header";

//--메인--
//세개의 포인트컬러 원 삼각형 네모 메뉴 - 소개, 프로젝트, contact

// --소개--
// 간단한 개인소개
// 업무경험 - 아이씨뱅큐 개발팀 인턴 , 잇다소프트 디자이너/PM
// 교육 - 인천대학교 전자공학과 , 디자인나스nd클래스 , 프로그래머스 데브코스 1기
// 기술스택 -

// --프젝--
// 디자인 - 간단하게 링크첨부 / 시안
// 프론트엔드

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/intro" element={<IntroPage></IntroPage>}></Route>
        <Route path="/project" element={<ProjectPage></ProjectPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
