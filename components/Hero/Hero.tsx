import Link from 'next/link';

import HeroDemo from './HeroDemo';

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
          <Link href="/plan" className="primary-button">
            <span className="button-title">Ver los planes</span>

            <span className="button-subtitle">
              Desde RD$600 a la semana
            </span>
          </Link>

          <button type="button" className="secondary-button">
            <span className="button-title">
              ▶ Ver cómo funciona
            </span>

            <span className="button-subtitle">
              Video demo próximamente
            </span>
          </button>
        </div>

        <HeroDemo />
      </div>
    </section>
  );
}