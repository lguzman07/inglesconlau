import Link from 'next/link';

export default function FinalCta() {
  return (
    <section className="section final-cta">
      <div className="container">
        <h2 className="section-title">
          Empieza por una clase de <span className="hero-highlight">RD$100.</span>
        </h2>

        <p>
          Una hora, en vivo, en un grupo pequeño. Si no es para ti, no has
          perdido nada.
        </p>

        <div className="hero-buttons">
          <Link href="/clases-grupales#comprar" className="primary-button">
            <span className="button-title">Reservar mi clase de prueba</span>
          </Link>

          <a
            href="https://wa.me/18096504884?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20las%20clases%20grupales"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            <span className="button-title">💬 Escríbeme por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
