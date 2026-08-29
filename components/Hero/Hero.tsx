import Link from 'next/link';

export default function Hero() {
  return (
    <section className="home">
      <div className="hero">
        <p className="section-eyebrow">Inglés para hispanohablantes</p>

        <h1>
          Porque lo que quieres es <span className="hero-highlight">hablar.</span>
        </h1>

        <p>
          No te enseño inglés como si empezaras desde cero. Te lo enseño a
          partir de algo que ya conoces perfectamente: el español. Clases
          en vivo, en grupos pequeños, a un horario fijo que eliges una
          sola vez.
        </p>

        <div className="hero-buttons">
          <Link href="/clases-grupales#comprar" className="primary-button">
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

        <ul className="hero-checks">
          <li>Grupos pequeños</li>
          <li>Niveles A1 a B2</li>
          <li>100% en línea, en vivo</li>
          <li>Soporte en español</li>
        </ul>
      </div>
    </section>
  );
}
