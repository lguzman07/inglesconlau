import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Términos y condiciones | Inglés con Lau',
  description:
    'Términos y condiciones de uso de la plataforma Inglés con Lau.',
};

export default function TerminosYCondicionesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← Volver a Inglés con Lau
        </Link>

        <article className={styles.card}>
          <header>
            <h1 className={styles.title}>Términos y condiciones</h1>

            <p className={styles.version}>
              Inglés con Lau · Versión 1.0 · Última actualización: 16 de agosto
              de 2026
            </p>

            <p className={styles.introduction}>
              Lee estos Términos antes de crear una cuenta o contratar la
              suscripción. Al registrarte y marcar la casilla de aceptación,
              declaras que los has leído y aceptado.
            </p>
          </header>

          <section className={styles.section}>
            <h2 className={styles.heading}>1. Identidad y alcance</h2>

            <p className={styles.paragraph}>
              Estos Términos regulan el acceso y uso de Inglés con Lau, una
              plataforma digital de aprendizaje de inglés operada desde la
              República Dominicana. Para consultas generales puedes escribir a{' '}
              <a href="mailto:lau@inglesconlau.com" className={styles.link}>
                lau@inglesconlau.com
              </a>{' '}
              y, para soporte o solicitudes relacionadas con la cuenta, a{' '}
              <a href="mailto:soporte@inglesconlau.com" className={styles.link}>
                soporte@inglesconlau.com
              </a>
              .
            </p>

            <p className={styles.paragraph}>
              La plataforma está dirigida exclusivamente a personas de 18 años
              o más. Al crear una cuenta declaras que cumples esta condición y
              que la información suministrada es correcta.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>2. Servicio educativo</h2>

            <p className={styles.paragraph}>
              La suscripción ofrece acceso, mientras permanezca activa, a
              lecciones grabadas, ejercicios interactivos, rutas de
              aprendizaje, visualización del progreso y materiales
              descargables cuando se indiquen. El
              contenido disponible puede ampliarse, reorganizarse o mejorarse
              sin reducir de manera sustancial el servicio contratado.
            </p>

            <p className={styles.paragraph}>
              Inglés con Lau es un recurso educativo y no garantiza que cada
              estudiante alcance un nivel, certificación, empleo o resultado
              específico. El progreso depende, entre otros factores, de la
              práctica, continuidad y participación de cada persona.
            </p>

            <p className={styles.paragraph}>
              <strong>Grabación de las clases en vivo.</strong> Las clases
              grupales en vivo podrían grabarse con fines educativos, para
              usarse como material de apoyo dentro de la futura Plataforma
              Inglés con Lau. Solo se graba el audio de la clase: la cámara y
              el rostro de los estudiantes nunca se graban ni se muestran.
              Cualquier grabación se usa exclusivamente con fines educativos
              y no se comparte fuera de la plataforma.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>3. Cuenta personal y seguridad</h2>

            <p className={styles.paragraph}>
              Cada cuenta es personal, individual e intransferible. Eres
              responsable de mantener en secreto tu contraseña, cerrar sesión
              en dispositivos compartidos y avisar inmediatamente si sospechas
              un acceso no autorizado.
            </p>

            <p className={styles.paragraph}>
              Puedes usar la plataforma desde celular, tableta o computadora.
              Podremos revisar señales razonables de uso compartido, como
              accesos simultáneos incompatibles o actividad imposible para una
              sola persona. Una señal aislada no producirá una suspensión
              automática: normalmente solicitaremos verificación o enviaremos
              una advertencia.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>
              4. Suscripción, precio y renovación
            </h2>

            <p className={styles.paragraph}>
              Existe un único plan de suscripción por RD$1,200 cada 30 días. El
              precio total y la periodicidad se mostrarán antes de confirmar el
              pago. La suscripción se renueva automáticamente cada 30 días
              hasta que la canceles.
            </p>

            <p className={styles.paragraph}>
              Después de cada cobro se enviará un recibo al correo registrado.
              Inglés con Lau no enviará publicidad ni promociones por correo.
              Si en el futuro fuera imprescindible cambiar el precio, se
              notificará con al menos 30 días de anticipación y podrás cancelar
              antes del siguiente cobro. Nunca se aplicará un precio nuevo sin
              aviso previo.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>5. Pagos fallidos y duplicados</h2>

            <p className={styles.paragraph}>
              Si un cobro es rechazado, podrán realizarse hasta tres intentos
              sobre la misma mensualidad pendiente durante un período de siete
              días. Los reintentos no crean mensualidades nuevas y se detendrán
              cuando el pago sea confirmado. Si los intentos fallan, el acceso
              se suspenderá hasta que actualices el método de pago; tu progreso
              permanecerá guardado.
            </p>

            <p className={styles.paragraph}>
              Si se confirma un cobro duplicado por error técnico, se corregirá
              o reembolsará. Inglés con Lau no almacena los datos completos de
              la tarjeta; el procesamiento corresponde al proveedor de pagos
              autorizado.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>
              6. Cancelación, acceso y reembolsos
            </h2>

            <p className={styles.paragraph}>
              Puedes cancelar en cualquier momento. La cancelación detiene
              futuras renovaciones, pero conservarás el acceso hasta terminar
              el período ya pagado. La suscripción no puede pausarse; podrás
              volver a suscribirte posteriormente y recuperar tu progreso si
              la cuenta continúa existiendo.
            </p>

            <p className={styles.paragraph}>
              Por tratarse de acceso digital disponible inmediatamente, los
              períodos ya iniciados no se reembolsan por falta de uso
              o cambio de decisión, salvo cobro duplicado,
              incumplimiento atribuible a Inglés con Lau o cualquier otro
              supuesto en que la legislación aplicable reconozca
              obligatoriamente un reembolso o remedio.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>
              7. Eliminación y recuperación de la cuenta
            </h2>

            <p className={styles.paragraph}>
              Cancelar la suscripción no elimina la cuenta. Si solicitas
              eliminarla, se cancelará inmediatamente la renovación automática
              y la cuenta quedará desactivada durante 30 días. Dentro de ese
              plazo podrás iniciar sesión y confirmar que deseas recuperarla.
            </p>

            <p className={styles.paragraph}>
              Recuperar la cuenta no reactiva automáticamente cobros. Si aún
              quedan días del período pagado, conservarás el acceso hasta su
              vencimiento original; después podrás pulsar “Reactivar
              suscripción” y confirmar un nuevo pago. Si no recuperas la cuenta
              durante los 30 días, se eliminarán los datos correspondientes,
              excepto los registros que deban conservarse por obligación legal.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>8. Disponibilidad y mantenimiento</h2>

            <p className={styles.paragraph}>
              Podrán realizarse mantenimientos y existir interrupciones
              técnicas. Si una interrupción atribuible a la plataforma dura
              menos de 48 horas continuas, se informará cuando sea
              razonablemente posible y se trabajará para restaurar el servicio,
              sin compensación automática. Si supera 48 horas continuas, el
              acceso se extenderá por el tiempo perdido.
            </p>

            <p className={styles.paragraph}>
              No se considerarán interrupciones atribuibles a Inglés con Lau las
              causadas por el dispositivo, conexión o proveedor de internet del
              usuario, fuerza mayor, actos de terceros fuera de control
              razonable o mantenimientos urgentes necesarios para proteger la
              seguridad.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>
              9. Uso permitido y conductas prohibidas
            </h2>

            <p className={styles.paragraph}>
              Puedes utilizar el contenido exclusivamente para tu aprendizaje
              personal y no comercial. No puedes:
            </p>

            <ul className={styles.list}>
              <li>
                Compartir la cuenta, contraseña, grabaciones o enlaces de
                acceso.
              </li>
              <li>
                Copiar, grabar, retransmitir, vender, publicar o distribuir
                lecciones, textos, ejercicios, hojas de respuestas o
                materiales.
              </li>
              <li>
                Usar bots, automatizaciones, extracción masiva, ingeniería
                inversa o métodos para alterar progreso, pagos o
                funcionamiento.
              </li>
              <li>
                Intentar acceder a cuentas, datos, áreas restringidas o sistemas
                de otras personas.
              </li>
              <li>
                Utilizar la plataforma para infringir derechos de autor,
                privacidad u otras leyes.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>
              10. Suspensión o terminación por incumplimiento
            </h2>

            <p className={styles.paragraph}>
              Normalmente enviaremos una advertencia y daremos oportunidad de
              corregir el incumplimiento. Podremos suspender o terminar
              inmediatamente cuando exista una infracción grave, riesgo de
              seguridad, fraude, distribución de contenido o perjuicio para
              otras personas o para la plataforma.
            </p>

            <p className={styles.paragraph}>
              Una cuenta terminada por incumplimiento confirmado perderá el
              acceso sin reembolso del período en curso, salvo que la ley
              aplicable disponga otra cosa. La decisión se tomará después de
              revisar razonablemente el caso.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>11. Propiedad intelectual</h2>

            <p className={styles.paragraph}>
              El diseño, marca, lecciones, explicaciones, ejercicios, rutas,
              hojas de trabajo, grabaciones y demás contenido original de
              Inglés con Lau están protegidos por las normas de propiedad
              intelectual. La suscripción concede únicamente una licencia
              limitada, revocable, no exclusiva e intransferible para uso
              personal durante el período de acceso.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>
              12. Privacidad y comunicaciones necesarias
            </h2>

            <p className={styles.paragraph}>
              El tratamiento de datos se explica en la Política de privacidad,
              que forma parte de estas condiciones. Solo enviaremos
              comunicaciones necesarias: recibos, incidencias de pago,
              seguridad, recuperación de contraseña, soporte solicitado,
              y cambios importantes.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>
              13. Cambios en el servicio o en estos Términos
            </h2>

            <p className={styles.paragraph}>
              Podremos actualizar estos Términos por cambios legales, técnicos o
              del servicio. Los cambios importantes se notificarán por correo o
              mediante un aviso destacado antes de entrar en vigor. Si no
              aceptas un cambio material, podrás cancelar antes de la siguiente
              renovación. Los cambios no reducirán derechos ya adquiridos ni se
              aplicarán retroactivamente cuando la ley lo prohíba.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>
              14. Responsabilidad y derechos obligatorios
            </h2>

            <p className={styles.paragraph}>
              Inglés con Lau prestará el servicio con diligencia razonable. Nada
              en estos Términos excluye responsabilidad ni limita derechos que
              no puedan excluirse conforme a la legislación dominicana. En la
              medida permitida por ley, no responderá por pérdidas indirectas
              derivadas del uso inadecuado, credenciales comprometidas por el
              usuario o servicios externos fuera de su control razonable.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>
              15. Ley aplicable y solución de controversias
            </h2>

            <p className={styles.paragraph}>
              Estos Términos se interpretan conforme a las leyes de la República
              Dominicana. Antes de acudir a otras vías, puedes escribir a{' '}
              <a href="mailto:soporte@inglesconlau.com" className={styles.link}>
                soporte@inglesconlau.com
              </a>{' '}
              para intentar resolver el asunto. También conservas el derecho de
              acudir a Pro Consumidor, a los tribunales competentes o a
              cualquier mecanismo que la ley ponga a tu disposición.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>16. Contacto</h2>

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
                <a
                  href="mailto:eventos@inglesconlau.com"
                  className={styles.link}
                >
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
          </section>

          <section className={styles.references}>
            <h2 className={styles.heading}>Referencias normativas</h2>

            <ul className={styles.list}>
              <li>
                Ley núm. 358-05, General de Protección de los Derechos del
                Consumidor o Usuario.
              </li>
              <li>
                Ley núm. 126-02, sobre Comercio Electrónico, Documentos y Firmas
                Digitales.
              </li>
              <li>
                Ley núm. 65-00, sobre Derecho de Autor, y sus modificaciones.
              </li>
              <li>
                Guía de buenas prácticas de comercio electrónico de Pro
                Consumidor.
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