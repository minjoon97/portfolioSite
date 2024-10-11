import styles from "./ProjectPage.module.css";
import { useState } from "react";

const ProjectPage = () => {
  const projectDesignList = [
    ["29초영화제", "2023.07", true, "서브페이지 20%"],
    ["Jx금속", "2023.08", false, "메인페이지 100% / 서브페이지 60%"],
    [
      "서울뮤직페스티벌2023",
      "2023.08",
      false,
      "메인페이지 100% / 서브페이지 50%",
    ],
    ["세명테크", "2023.10", true, "서브페이지 80%"],
    ["삼녹", "2023.10", true, "메인페이지 100%"],
    ["메타스카이", "2023.12", true, "메인페이지 100%, 서브페이지 100%"],
    ["PNK디자인", "2024.01", false, "메인페이지 100%"],
    ["이안컴퍼니", "2024.04", false, "메인페이지 100%"],
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.projectDev}>
          <h2 className={styles.title}>Project-Development</h2>
          <ul>
            <li>
              <p className={styles.itemTop}>
                CINE6IX
                <span className={styles.date}>2024.08</span>
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.projectDesig}>
          <h2 className={styles.title}>Project-Design</h2>
          <ul>
            {projectDesignList.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  handleClick(index);
                }}
                className={activeIndex === index ? styles.on : ""}
              >
                <p className={styles.itemTop}>
                  <div>
                    {item[0]}
                    <span className={styles.gdwebLogoWrapper}>
                      {item[2] ? (
                        <img
                          src="/gdweb_logo.png"
                          className={styles.gdwebLogo}
                        ></img>
                      ) : (
                        ""
                      )}
                    </span>
                  </div>

                  <span className={styles.date}>{item[1]}</span>
                </p>
                <div className={styles.detail}>
                  <div className={item[2] ? styles.gdweb : styles.gdwebNo}>
                    gdweb award 수상작
                  </div>
                  <div className={styles.contribute}>기여도 : {item[3]}</div>
                  <a
                    href="https://www.29sfilm.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <div className={styles.siteBtn}>사이트 바로가기</div>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
