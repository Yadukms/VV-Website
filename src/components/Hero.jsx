import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span>EPIC EVENTS</span>
          <span>UNMATCHED ENERGY</span>
          {/* <span>ENERGY</span> */}
        </h1>
        <p className={styles.subtitle}>
          COMPREHENSIVE AUDIO VISUAL SERVICES IN AUSTIN, TEXAS
        </p>
        <button className={styles.cta}>BOOK NOW</button>
      </div>
    </div>
  );
}

export default Hero;
