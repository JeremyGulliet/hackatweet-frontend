import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <header className={styles.header}>
            <img src="logo-twitter-blanc-png.png" alt="logo" className={styles.image} />
          </header>
          <div className={styles.vide}>

          </div>

          <footer className={styles.footer}>
            <FontAwesomeIcon className={styles.logout} icon={faRightFromBracket} />
          </footer>
        </div>
        <div className={styles.containerCenter}>
          <h1 className={styles.title}>Home</h1>
        </div>
        <div className={styles.containerRight}>
          <h1 className={styles.title}>Trends</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
