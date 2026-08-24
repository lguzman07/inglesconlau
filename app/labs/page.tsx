import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';

import styles from './Labs.module.css';

export const metadata: Metadata = {
  title: 'Clases grupales A1 | Inglés con Lau',
  description:
    'Reserva tu horario para las clases grupales en vivo de Inglés con Lau.',
};

const BOOKING_URL =
  'https://calendly.com/admin-inglesconlau/clasesgrupalesa1';

const schedules = [
  {
    id: 'morning',
    label: 'Grupo de la mañana',
    time: '9:30 a. m. – 10:30 a. m.',
  },
  {
    id: 'midday',
    label: 'Grupo del mediodía',
    time: '11:00 a. m. – 12:00 p. m.',
  },
  {
    id: 'night',
    label: 'Grupo de la noche',
    time: '9:00 p. m. – 10:00 p. m.',
  },
];

const benefits = [
  'Clases en vivo de lunes a viernes',
  'Explicaciones claras desde el nivel A1',
  'Práctica oral durante cada encuentro',
  'Corrección y acompañamiento en vivo',
  'Acceso mediante una sala privada',
];

export default async function ClasesGrupalesPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/iniciar-sesion');
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link
          href="/inicio"
          className={styles.backLink}
        >
          ← Volver a Inicio
        </Link>

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>
              CLASES EN VIVO
            </span>

            <p className={styles.eyebrow}>
              CLASES GRUPALES A1
            </p>

            <h1>
              Aprende inglés en compañía
            </h1>

            <p className={styles.heroDescription}>
              Elige el horario que mejor se adapte a ti
              y aprende en un grupo pequeño, con
              acompañamiento, práctica y corrección en
              vivo.
            </p>

            <div className={styles.heroActions}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className={styles.primaryButton}
              >
                Reservar mi horario

                <span aria-hidden="true">
                  →
                </span>
              </a>

              <a
                href="#horarios"
                className={styles.secondaryButton}
              >
                Ver horarios
              </a>
            </div>
          </div>

          <aside
            className={styles.priceCard}
            aria-label="Precio de las clases"
          >
            <p className={styles.priceLabel}>
              INVERSIÓN SEMANAL
            </p>

            <div className={styles.price}>
              <span>RD$</span>
              <strong>600</strong>
            </div>

            <p className={styles.priceDescription}>
              Incluye cinco clases en vivo de una hora,
              de lunes a viernes.
            </p>

            <div className={styles.priceDetail}>
              <span aria-hidden="true">
                ✓
              </span>

              <p>
                Equivale a RD$120 por cada hora de clase.
              </p>
            </div>

            <div className={styles.priceDetail}>
              <span aria-hidden="true">
                ✓
              </span>

              <p>
                Máximo 10 estudiantes en cada grupo.
              </p>
            </div>
          </aside>
        </section>

        <section
          id="horarios"
          className={styles.schedulesSection}
          aria-labelledby="schedules-title"
        >
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>
                HORARIOS
              </p>

              <h2 id="schedules-title">
                Elige tu grupo
              </h2>
            </div>

            <p>
              Las clases se imparten de lunes a viernes
              en el horario de República Dominicana
              (UTC−4).
            </p>
          </div>

          <div className={styles.scheduleGrid}>
            {schedules.map((schedule) => (
              <article
                key={schedule.id}
                className={styles.scheduleCard}
              >
                <span className={styles.scheduleDot} />

                <p className={styles.scheduleLabel}>
                  {schedule.label}
                </p>

                <h3>{schedule.time}</h3>

                <p className={styles.scheduleDays}>
                  Lunes a viernes
                </p>

                <div className={styles.capacity}>
                  Hasta 10 estudiantes
                </div>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.scheduleButton}
                >
                  Elegir este horario
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          className={styles.benefitsSection}
          aria-labelledby="benefits-title"
        >
          <div>
            <p className={styles.eyebrow}>
              QUÉ INCLUYE
            </p>

            <h2 id="benefits-title">
              Un espacio para aprender y practicar
            </h2>

            <p className={styles.sectionDescription}>
              No necesitas saberlo todo antes de entrar.
              Estas clases están diseñadas para ayudarte
              a construir una base clara y usar el
              inglés con más seguridad.
            </p>
          </div>

          <ul className={styles.benefitList}>
            {benefits.map((benefit) => (
              <li key={benefit}>
                <span aria-hidden="true">
                  ✓
                </span>

                <p>{benefit}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className={styles.processSection}
          aria-labelledby="process-title"
        >
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>
                INSCRIPCIÓN
              </p>

              <h2 id="process-title">
                ¿Cómo reservas tu espacio?
              </h2>
            </div>
          </div>

          <ol className={styles.processGrid}>
            <li className={styles.processCard}>
              <span className={styles.stepNumber}>
                01
              </span>

              <h3>Elige tu horario</h3>

              <p>
                Abre el calendario y selecciona uno de
                los tres grupos disponibles.
              </p>
            </li>

            <li className={styles.processCard}>
              <span className={styles.stepNumber}>
                02
              </span>

              <h3>Envía el comprobante</h3>

              <p>
                Después de reservar, envía el
                comprobante de pago siguiendo las
                instrucciones del correo.
              </p>
            </li>

            <li className={styles.processCard}>
              <span className={styles.stepNumber}>
                03
              </span>

              <h3>Recibe tu acceso</h3>

              <p>
                Cuando el pago sea confirmado, recibirás
                el enlace privado para entrar a la
                clase.
              </p>
            </li>
          </ol>
        </section>

        <section className={styles.notice}>
          <div
            className={styles.noticeIcon}
            aria-hidden="true"
          >
            !
          </div>

          <div>
            <h2>Importante</h2>

            <p>
              Reservar un horario no confirma
              automáticamente el cupo. La inscripción
              queda confirmada después de verificar el
              pago. No compartas el enlace privado de la
              clase.
            </p>
          </div>
        </section>

        <section className={styles.finalCta}>
          <p className={styles.eyebrow}>
            ¿LISTA PARA COMENZAR?
          </p>

          <h2>
            Reserva tu grupo de clases A1
          </h2>

          <p>
            Escoge el horario que funcione mejor para ti
            y asegura tu espacio.
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className={styles.primaryButton}
          >
            Reservar mi horario

            <span aria-hidden="true">
              →
            </span>
          </a>
        </section>
      </div>
    </main>
  );
}