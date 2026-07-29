export default function Hero() {
  return (
    <section className="home">
      <div className="hero">
        <h1>Inglés Con Lau</h1>

        <h2 className="hero-slogan">
          Porque lo que quieres...
          <br />
          es hablar.
        </h2>

        <p>
          Aprende inglés con confianza mediante una metodología diseñada
          especialmente para hispanohablantes. Comprende el idioma, gana
          seguridad y comunícate desde el primer día.
        </p>

        <div className="hero-buttons">
          <button className="primary-button">
            <span className="button-title">
              Start Learning
            </span>

            <span className="button-subtitle">
              Comenzar a aprender
            </span>
          </button>

          <button className="secondary-button">
            <span className="button-title">
              Explore Methodology
            </span>

            <span className="button-subtitle">
              Explorar metodología
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}