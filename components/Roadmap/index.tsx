import Header from './Header';
import StepOne from './StepOne';

import styles from './Roadmap.module.css';

export default function Roadmap() {
  return (
    <section id="roadmap" className={styles.roadmap}>
      <div className={styles.container}>
        <Header />

        <StepOne />
      </div>
    </section>
  );
}