import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [mainState, setMainState] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setMainState(true);
    } else {
      setMainState(false);
    }
  }, [location.pathname]);
  return (
    <header className={`${mainState ? styles.headerMain : styles.header}`}>
      <div className={styles.top}>
        <Link to="/" className={styles.link}>
          <h1 className={styles.logo}>
            <img src="logo.png" alt="logo"></img>
          </h1>
        </Link>
        <p>710.</p>
        <ul className={styles.menuWrapper}>
          <Link to="/intro" className={styles.link}>
            <li>소개</li>
          </Link>
          <Link to="/project" className={styles.link}>
            <li>프로젝트</li>
          </Link>
          <Link to="/contact" className={styles.link}>
            <li>연락처</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
