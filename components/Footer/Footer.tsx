import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerContainer}>
        <div className={styles.footerBrand}>
          <p className={styles.footerLogo}>Inglés con Lau</p>

          <p className={styles.footerDescription}>
            Aprende inglés con confianza, a tu ritmo y sin miedo a equivocarte.
          </p>

          <div className={styles.footerSocial}>
            <p className={styles.footerTitle}>Sígueme</p>

            <a
              href="https://www.instagram.com/inglesconlaurd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Inglés con Lau"
            >
              <span aria-hidden="true">📷</span>
              <span>@inglesconlaurd</span>
            </a>
          </div>

          <nav
            className={styles.footerLegal}
            aria-label="Información legal"
          >
            <p className={styles.footerTitle}>Información legal</p>

            <ul className={styles.footerLegalLinks}>
              <li>
                <Link href="/terminos-y-condiciones">
                  Términos y condiciones
                </Link>
              </li>

              <li>
                <Link href="/politica-de-privacidad">
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.footerContact}>
          <h2 className={styles.footerTitle}>Contacto</h2>

          <ul className={styles.footerEmailList}>
            <li>
              <span>Consultas generales</span>

              <a href="mailto:lau@inglesconlau.com">
                lau@inglesconlau.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          © {currentYear} Inglés con Lau. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}