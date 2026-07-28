import Header from './Header';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import FinalCard from './FinalCard';

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      style={{
        padding: '9rem 2rem',
        background: '#fcfcfb',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <Header />

        <StepOne />

        <StepTwo />

        <StepThree />

        <StepFour />

        <StepFive />

        <FinalCard />
      </div>
    </section>
  );
}
