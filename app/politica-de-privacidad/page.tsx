import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Política de privacidad | Inglés con Lau',
  description:
    'Política de privacidad y tratamiento de datos personales de Inglés con Lau.',
};

export default function PoliticaDePrivacidadPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/en-vivo" className={styles.backLink}>
          ← Volver a Inglés con Lau
        </Link>

        <article className={styles.card}>
          <header>
            <h1 className={styles.title}>Política de privacidad</h1>

            <p className={styles.version}>
              Inglés con Lau · Versión 1.0 · Última actualización: 16 de agosto
              de 2026
            </p>

            <p className={styles.introduction}>
              Esta Política explica qué información utiliza Inglés con Lau,
              para qué la necesita, con quién puede compartirla y cómo puedes
              ejercer tus derechos.
            </p>
          </header>

          <section className={styles.section}>
            <h2 className={styles.heading}>
              1. Responsable del tratamiento
            </h2>

            <p className={styles.paragraph}>
              Inglés con Lau es responsable del tratamiento de los datos
              personales recopilados mediante inglesconlau.com y su portal
              educativo. Para ejercer derechos o realizar consultas de
              privacidad, escribe a{' '}
              <a
                href="mailto:soporte@inglesconlau.com"
                className={styles.link}
              >
                soporte@inglesconlau.com
              </a>
              .
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>
              2. A quién se dirige la plataforma
            </h2>

            <p className={styles.paragraph}>
              La plataforma está dirigida exclusivamente a personas de 18 años
              o más y no pretende recopilar conscientemente datos de menores de
              edad. Si se detecta una cuenta de una persona menor, podrá
              suspenderse y eliminarse la información, tomando las medidas
              razonables necesarias para protegerla.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>3. Datos que recopilamos</h2>

            <ul className={styles.list}>
              <li>
                <strong>Registro y perfil:</strong> nombre, correo electrónico,
                fecha de nacimiento y credenciales protegidas. La contraseña se
                almacena de forma cifrada o mediante mecanismos equivalentes;
                Inglés con Lau no puede verla en texto legible.
              </li>

              <li>
                <strong>Aprendizaje:</strong> nivel, lecciones vistas,
                respuestas, progreso, rutas, descargas y actividad
                necesaria para ofrecer el servicio.
              </li>

              <li>
                <strong>Cuenta y seguridad:</strong> dirección IP, fechas de
                acceso, tipo de dispositivo, navegador, sesiones, registros de
                seguridad y señales razonables de uso no autorizado.
              </li>

              <li>
                <strong>Suscripción y facturación:</strong> estado de la
                suscripción, importes, fechas, identificadores de transacción y
                recibos. Los datos completos de la tarjeta son procesados por el
                proveedor de pagos y no se almacenan en Inglés con Lau.
              </li>

              <li>
                <strong>Soporte:</strong> mensajes, archivos o información que
                decidas enviar cuando solicites ayuda.
              </li>

              <li>
                <strong>Analítica general:</strong> visitas, páginas utilizadas,
                rendimiento y errores, sin crear perfiles publicitarios.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>
              4. Para qué utilizamos los datos
            </h2>

            <ul className={styles.list}>
              <li>Crear, autenticar, proteger y administrar tu cuenta.</li>

              <li>
                Proporcionar lecciones, ejercicios, rutas y
                visualización del progreso.
              </li>

              <li>
                Gestionar pagos, renovaciones, recibos, cancelaciones y
                reactivaciones.
              </li>

              <li>
                Responder solicitudes de soporte y comunicaciones iniciadas por
                ti.
              </li>

              <li>
                Prevenir fraude, accesos no autorizados, uso compartido y
                alteración de la plataforma.
              </li>

              <li>
                Medir el funcionamiento general, corregir errores y mejorar la
                accesibilidad y el rendimiento.
              </li>

              <li>
                Cumplir obligaciones legales, fiscales, contables y solicitudes
                válidas de autoridades.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>
              5. Fundamentos del tratamiento
            </h2>

            <p className={styles.paragraph}>
              Tratamos datos cuando son necesarios para prestar el servicio que
              solicitas y ejecutar la suscripción; cuando debemos cumplir una
              obligación legal; cuando existe un interés legítimo, proporcionado
              y compatible con tus derechos, como proteger cuentas y mejorar el
              funcionamiento; o cuando otorgas un consentimiento específico, por
              ejemplo, antes de entrar a una sesión cuya voz puede ser grabada.
            </p>

            <p className={styles.paragraph}>
              No utilizamos tus datos para publicidad, perfiles publicitarios,
              promociones ni venta de información personal.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>6. Correos y comunicaciones</h2>

            <p className={styles.paragraph}>
              No enviamos promociones ni novedades comerciales. Usaremos el
              correo exclusivamente para recibos, incidencias de pago, seguridad,
              recuperación de contraseña, soporte solicitado, y cambios importantes
              en el servicio, precio o documentos legales.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>
              7. Cookies y tecnologías similares
            </h2>

            <p className={styles.paragraph}>
              Utilizamos únicamente cookies o tecnologías necesarias para iniciar
              sesión, mantener la sesión, proteger la cuenta, procesar la
              suscripción, recordar preferencias esenciales y garantizar el
              funcionamiento. También podemos utilizar analítica general
              orientada a rendimiento y uso, sin publicidad ni seguimiento entre
              sitios con fines comerciales.
            </p>

            <p className={styles.paragraph}>
              Puedes configurar tu navegador para bloquear cookies, pero las
              estrictamente necesarias son indispensables para iniciar sesión y
              usar áreas protegidas.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>8. Proveedores y destinatarios</h2>

            <p className={styles.paragraph}>
              Podemos compartir únicamente los datos necesarios con proveedores
              que nos ayudan a operar el servicio, bajo obligaciones de
              confidencialidad y seguridad, incluyendo:
            </p>

            <ul className={styles.list}>
              <li>
                Supabase u otro proveedor equivalente, para autenticación, base
                de datos y almacenamiento.
              </li>

              <li>
                Vercel, para alojamiento, entrega del sitio, registros técnicos y
                analítica general.
              </li>

              <li>
                AZUL u otro procesador autorizado, para pagos, tokenización,
                prevención de fraude y recibos.
              </li>

              <li>
                Servicios de correo transaccional, para enviar mensajes
                necesarios.
              </li>

              <li>
                Asesores profesionales o autoridades, cuando sea necesario para
                cumplir una obligación legal o proteger derechos.
              </li>
            </ul>

            <p className={styles.paragraph}>
              No vendemos ni alquilamos información personal. Cuando un proveedor
              procese datos en otro país, adoptaremos medidas contractuales y de
              seguridad razonables y procuraremos que el tratamiento mantenga un
              nivel adecuado de protección.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>
              9. Conservación de la información
            </h2>

            <ul className={styles.list}>
              <li>
                <strong>Mientras la cuenta exista:</strong> conservaremos los
                datos necesarios para prestar el servicio, protegerla y mantener
                el progreso.
              </li>

              <li>
                <strong>Cancelación:</strong> cancelar la suscripción no elimina
                la cuenta ni el progreso.
              </li>

              <li>
                <strong>Solicitud de eliminación:</strong> la cuenta se
                desactivará durante 30 días. Si no la recuperas en ese plazo,
                eliminaremos o anonimizaremos el perfil, progreso y
                actividad que ya no debamos conservar.
              </li>

              <li>
                <strong>Registros fiscales y de pago:</strong> se conservarán
                durante el plazo exigido por la normativa aplicable, que puede
                alcanzar 10 años.
              </li>

              <li>
                <strong>Analítica anonimizada:</strong> puede conservarse cuando
                ya no permita identificar razonablemente a una persona.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>10. Seguridad</h2>

            <p className={styles.paragraph}>
              Aplicamos medidas técnicas y organizativas razonables, como
              conexiones cifradas, control de acceso, separación de permisos,
              protección de contraseñas, registros de seguridad y copias de
              respaldo. Ningún sistema es absolutamente infalible; si ocurre un
              incidente relevante, investigaremos, mitigaremos sus efectos y
              realizaremos las notificaciones exigidas por la ley.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>11. Tus derechos</h2>

            <p className={styles.paragraph}>
              Puedes solicitar acceso a tus datos, su corrección, actualización,
              supresión cuando proceda y cualquier otro derecho reconocido por la
              Ley 172-13. También puedes cuestionar un dato inexacto o un
              tratamiento que consideres improcedente.
            </p>

            <p className={styles.paragraph}>
              Para ejercer tus derechos, utiliza Configuración → Eliminar cuenta
              cuando corresponda o escribe a{' '}
              <a
                href="mailto:soporte@inglesconlau.com"
                className={styles.link}
              >
                soporte@inglesconlau.com
              </a>
              . Podremos pedir información razonable para verificar tu identidad
              y evitar que otra persona acceda o elimine tus datos. Responderemos
              dentro del plazo aplicable y explicaremos cualquier limitación
              legal.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>
              12. Recuperación de una cuenta desactivada
            </h2>

            <p className={styles.paragraph}>
              Durante los 30 días posteriores a la solicitud de eliminación
              podrás iniciar sesión y confirmar que deseas recuperar la cuenta.
              Esto restaura el perfil y el progreso, pero no reactiva
              automáticamente la renovación ni genera un cobro. Si el período
              pagado terminó, deberás pulsar “Reactivar suscripción” y confirmar
              el pago.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>13. Decisiones automatizadas</h2>

            <p className={styles.paragraph}>
              No tomamos decisiones legales o de efecto similar basadas
              exclusivamente en perfiles automatizados. Las señales técnicas de
              fraude o uso compartido se revisarán razonablemente antes de una
              medida definitiva, salvo que sea necesario un bloqueo temporal
              inmediato para proteger la seguridad.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>
              14. Cambios a esta Política
            </h2>

            <p className={styles.paragraph}>
              Podremos actualizar esta Política por cambios legales, técnicos o
              del servicio. Los cambios importantes se comunicarán por correo o
              mediante un aviso destacado antes de entrar en vigor. La fecha de
              la versión vigente aparecerá al inicio del documento.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>15. Contacto y reclamaciones</h2>

            <ul className={styles.contactList}>
              <li>
                <strong>Consultas generales:</strong>{' '}
                <a href="mailto:lau@inglesconlau.com" className={styles.link}>
                  lau@inglesconlau.com
                </a>
              </li>

              <li>
                <strong>Soporte, cuenta y privacidad:</strong>{' '}
                <a
                  href="mailto:soporte@inglesconlau.com"
                  className={styles.link}
                >
                  soporte@inglesconlau.com
                </a>
              </li>

              <li>
                <strong>Pagos, cobros y facturación:</strong>{' '}
                <a href="mailto:pagos@inglesconlau.com" className={styles.link}>
                  pagos@inglesconlau.com
                </a>
              </li>

              <li>
                <strong>Eventos y colaboraciones:</strong>{' '}
                <a href="mailto:eventos@inglesconlau.com" className={styles.link}>
                  eventos@inglesconlau.com
                </a>
              </li>

              <li>
                <strong>Instagram:</strong>{' '}
                <a
                  href="https://www.instagram.com/inglesconlaurd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  @inglesconlaurd
                </a>
              </li>

              <li>
                <strong>Sitio web:</strong>{' '}
                <a href="https://inglesconlau.com" className={styles.link}>
                  inglesconlau.com
                </a>
              </li>
            </ul>

            <p className={styles.paragraphWithTopMargin}>
              Si consideras que tus datos no se han tratado correctamente, puedes
              comunicarte primero con Inglés con Lau y conservar el derecho de
              acudir ante la autoridad o los tribunales competentes conforme a la
              legislación dominicana.
            </p>
          </section>

          <section className={styles.references}>
            <h2 className={styles.heading}>Referencias normativas</h2>

            <ul className={styles.list}>
              <li>
                Ley núm. 172-13, sobre Protección Integral de los Datos
                Personales.
              </li>

              <li>
                Ley núm. 358-05, General de Protección de los Derechos del
                Consumidor o Usuario.
              </li>

              <li>
                Ley núm. 126-02, sobre Comercio Electrónico, Documentos y Firmas
                Digitales.
              </li>

              <li>
                Código Tributario de la República Dominicana y criterios de la
                DGII sobre conservación documental.
              </li>
            </ul>
          </section>

          <footer className={styles.footer}>
            <p>© 2026 Inglés con Lau. Todos los derechos reservados.</p>
          </footer>
        </article>
      </div>
    </main>
  );
}