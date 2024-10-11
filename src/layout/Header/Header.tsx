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
        <Link to="/">
          <h1 className={styles.logo}>
            <img src="public\logo.png"></img>
          </h1>
        </Link>
        <p>710.</p>
        <ul className={styles.menuWrapper}>
          <li>소개</li>
          <li>프로젝트</li>
          <li>연락처</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
