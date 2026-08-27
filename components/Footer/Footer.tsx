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

            <li>
              <span>Soporte, cuenta y privacidad</span>

              <a href="mailto:soporte@inglesconlau.com">
                soporte@inglesconlau.com
              </a>
            </li>

            <li>
              <span>Pagos, cobros y facturación</span>

              <a href="mailto:pagos@inglesconlau.com">
                pagos@inglesconlau.com
              </a>
            </li>

            <li>
              <span>Eventos y colaboraciones</span>

              <a href="mailto:eventos@inglesconlau.com">
                eventos@inglesconlau.com
              </a>
            </li>

            <li>
              <span>WhatsApp</span>

              <a
                href="https://wa.me/18096504884?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20las%20clases%20grupales"
                target="_blank"
                rel="noopener noreferrer"
              >
                809-650-4884
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