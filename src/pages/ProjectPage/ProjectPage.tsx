import styles from "./ProjectPage.module.css";
import { useState } from "react";

interface Project {
  title: string;
  date: string;
  isAwarded: boolean;
  contribution: string;
  url: string;
}

const ProjectPage = () => {
  const projectDesignList: Project[] = [
    {
      title: "29초영화제",
      date: "2023.07",
      isAwarded: true,
      contribution: "서브페이지 20%",
      url: "https://www.29sfilm.com/",
    },
    {
      title: "Jx금속",
      date: "2023.08",
      isAwarded: false,
      contribution: "메인페이지 100% / 서브페이지 60%",
      url: "https://www.nmmk.jx-group.co.kr/",
    },
    {
      title: "서울뮤직페스티벌2023",
      date: "2023.08",
      isAwarded: false,
      contribution: "메인페이지 100% / 서브페이지 50%",
      url: "http://www.seoulmusicfestival.co.kr/kor",
    },
    {
      title: "세명테크",
      date: "2023.10",
      isAwarded: true,
      contribution: "서브페이지 80%",
      url: "https://www.semyungtech.com/kor/index.php#close",
    },
    {
      title: "삼녹",
      date: "2023.10",
      isAwarded: true,
      contribution: "메인페이지 100%",
      url: "https://samnok.co.kr/",
    },
    {
      title: "메타스카이",
      date: "2023.12",
      isAwarded: true,
      contribution: "메인페이지 100%, 서브페이지 100%",
      url: "https://weecoda.com/kor/",
    },
    {
      title: "PNK디자인",
      date: "2024.01",
      isAwarded: false,
      contribution: "메인페이지 100%",
      url: "https://p-kdesign.co.kr/",
    },
    {
      title: "이안컴퍼니",
      date: "2024.04",
      isAwarded: false,
      contribution: "메인페이지 100%",
      url: "https://ianncompany.co.kr/",
    },
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
            <li>
              <p className={styles.itemTop}>
                야!소풍어때?
                <span className={styles.date}>2024.10</span>
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
                    {item.title}
                    <span className={styles.gdwebLogoWrapper}>
                      {item.isAwarded ? (
                        <img
                          src="gdweb_logo.png"
                          className={styles.gdwebLogo}
                        ></img>
                      ) : (
                        ""
                      )}
                    </span>
                  </div>

                  <span className={styles.date}>{item.date}</span>
                </p>
                <div className={styles.detail}>
                  <div
                    className={item.isAwarded ? styles.gdweb : styles.gdwebNo}
                  >
                    gdweb award 수상작
                  </div>
                  <div className={styles.contribute}>
                    기여도 : {item.contribution}
                  </div>
                  <a
                    href={item.url}
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
