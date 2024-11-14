import styles from "./MainPage.module.css";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.contents}>
          <Link to="/intro">
            <div className={styles.circle}>
              <span className={styles.circleEng}>Intro</span>
              <span className={styles.circleKor}>소개</span>
            </div>
          </Link>
          <Link to="/project">
            <div className={styles.triangle}>
              <span className={styles.triangleEng}>Project</span>
              <span className={styles.triangleKor}>프로젝트</span>
            </div>
          </Link>
          <Link to="/contact">
            <div className={styles.square}>
              <span className={styles.squareEng}>Contact</span>
              <span className={styles.squareKor}>연락처</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainPage;
