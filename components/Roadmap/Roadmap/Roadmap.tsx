import Header from "../Header/Header";
import StepOne from "../StepOne/StepOne";

import styles from "./Roadmap.module.css";

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