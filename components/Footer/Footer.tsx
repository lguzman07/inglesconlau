export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <p className="footer-logo">Inglés con Lau</p>

          <p className="footer-description">
            Aprende inglés con confianza, a tu ritmo y sin miedo a equivocarte.
          </p>

          <div className="footer-social">
            <p className="footer-title">Sígueme</p>

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
        </div>

        <div className="footer-contact">
          <h2 className="footer-title">Contacto</h2>

          <ul className="footer-email-list">

            <li>
              <span>Dudas sobre los ejercicios</span>

              <a href="mailto:lau@inglesconlau.com">
                lau@inglesconlau.com
              </a>
            </li>

            <li>
              <span>Ayuda y soporte</span>

              <a href="mailto:soporte@inglesconlau.com">
                soporte@inglesconlau.com
              </a>
            </li>

            <li>
              <span>Pagos y suscripciones</span>

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


          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Inglés con Lau. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}