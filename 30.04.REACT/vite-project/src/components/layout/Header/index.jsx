import { FaPhone } from "react-icons/fa6";
import styles from "./index.module.scss";
const Header = () => {
  return (
    <header>
      <div id={styles["header-top"]}>
        <div className="container">
          <div className={styles["header-top"]}> 
            <a href="#">
              <FaPhone />
              +748 383 23 14
            </a>
            <nav>
              <ul>
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Customer service</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
