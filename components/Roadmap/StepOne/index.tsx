import Text from './Text';
import Lesson from './Lesson';
import styles from '../Roadmap.module.css';

export default function StepOne() {
  return (
    <section
      className={styles.twoColumn}
      style={{
        marginTop: '8rem',
      }}
    >
      <Text />
      <Lesson />
    </section>
  );
}
