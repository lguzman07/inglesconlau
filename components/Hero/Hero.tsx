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
              Clase de prueba desde RD$100
            </span>
          </Link>

          <a
            href="https://wa.me/18096504884?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20las%20clases%20grupales"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            <span className="button-title">
              💬 Escríbeme por WhatsApp
            </span>

            <span className="button-subtitle">
              809-650-4884
            </span>
          </a>
        </div>

        <HeroDemo />
      </div>
    </section>
  );
}