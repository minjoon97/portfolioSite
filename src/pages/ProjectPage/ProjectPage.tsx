import styles from "./ProjectPage.module.css";
import { useState } from "react";
import { projectDesignList } from "../../data/project-design-list";
import { projectDevList } from "../../data/project-dev-list";
import DevProjectModal from "../../components/DevProjectModal/DevProjectModal";

const ProjectPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [clickedData, setClickedData] = useState<number>(0);
  const [modalState, setModalState] = useState(false);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.projectDev}>
          <h2 className={styles.title}>Project-Development</h2>
          <ul>
            {projectDevList.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setClickedData(index);
                  setModalState(true);
                }}
              >
                <p className={styles.itemTop}>
                  {item.title}
                  <span className={styles.date}>{item.date}</span>
                </p>
              </li>
            ))}
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
                <div className={styles.itemTop}>
                  <div>
                    {item.title}
                    <span className={styles.gdwebLogoWrapper}>
                      {item.isAwarded ? (
                        <img
                          src="gdweb_logo.png"
                          alt="gdweb_logo"
                          className={styles.gdwebLogo}
                        ></img>
                      ) : (
                        ""
                      )}
                    </span>
                  </div>

                  <span className={styles.date}>{item.date}</span>
                </div>
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
      <DevProjectModal
        clickedData={clickedData}
        modalState={modalState}
        setModalState={setModalState}
      ></DevProjectModal>
    </>
  );
};

export default ProjectPage;
