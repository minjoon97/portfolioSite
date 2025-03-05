import styles from "./IntroPage.module.css";

const IntroPage = () => {
  return (
    <>
      <header className={styles.title}>
        <h2 className={styles.titleLogo}>
          <img src="logo_green.png" alt="profile_logo"></img>
        </h2>
        <span>kimminjoon</span>
        <p>Frontend Developer</p>
      </header>
      <section className={styles.introContents}>
        <div className={styles.skillWrapper}>
          <h3>Skills</h3>
          <span className={styles.skillTitle}>Dev</span>
          <p>
            HTML5 / CSS3 / Javascript / Typescript / React / Next.js /
            Tanstack-Query (React-Query) / Zustand / StyledComponents / MUI
          </p>
          <span className={styles.skillTitle}>Infra & Tools</span>
          <p>
            Git / GitHub / firebase / Vercel / Vite / Slack / Postman / Swagger
          </p>
          <span className={styles.skillTitle}>Others</span>
          <p>Photoshop / Illustrator / Figma / XD / Tableau / Slack</p>
        </div>
        <div className={styles.workWrapper}>
          <h3>업무경험</h3>
          <ul>
            <li>
              잇다소프트 디자이너 / PM
              <span>2023.06 - 2024.01</span>
            </li>
            <li>
              (주)아이씨뱅큐 개발팀 인턴
              <span>2022.07 - 2022.12</span>
            </li>
          </ul>
        </div>
        <div className={styles.eduWrapper}>
          <h3>교육</h3>
          <ul>
            <li>
              프로그래머스 데브코스 프론트엔드
              <span>2024.07 - 2024.12</span>
            </li>
            <li>
              디자인나스 nd클래스
              <span>2023.02 - 2023.06</span>
            </li>
            <li>
              인천대학교 전자공학과
              <span>2016.03 - 2023.02</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default IntroPage;
