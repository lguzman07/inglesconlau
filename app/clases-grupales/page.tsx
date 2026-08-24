import type { Metadata } from 'next';

import Link from 'next/link';
import { redirect } from 'next/navigation';

import WeeklyGroupClassBooking from '@/components/WeeklyGroupClassBooking/WeeklyGroupClassBooking';
import { createClient } from '@/lib/supabase/server';

import styles from './ClasesGrupales.module.css';

export const metadata: Metadata = {
  title:
    'Clases grupales A1 | Inglés con Lau',

  description:
    'Reserva tu semana para las clases grupales en vivo de Inglés con Lau.',
};

const benefits = [
  'Clases en vivo de lunes a viernes',
  'Grupos pequeños de hasta 10 estudiantes',
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

            <p
              className={
                styles.heroDescription
              }
            >
              Elige la semana y el horario que
              mejor se adapten a ti. Aprende
              dentro de un grupo pequeño, con
              acompañamiento, práctica y
              corrección en vivo.
            </p>

            <div
              className={
                styles.heroActions
              }
            >
              <a
                href="#reservar"
                className={
                  styles.primaryButton
                }
              >
                Seleccionar mi semana

                <span aria-hidden="true">
                  →
                </span>
              </a>

              <a
                href="#reservar"
                className={
                  styles.secondaryButton
                }
              >
                Ver semanas y horarios
              </a>
            </div>
          </div>

          <aside
            className={styles.priceCard}
            aria-label="Precio de las clases"
          >
            <p
              className={
                styles.priceLabel
              }
            >
              INVERSIÓN SEMANAL
            </p>

            <div className={styles.price}>
              <span>RD$</span>

              <strong>600</strong>
            </div>

            <p
              className={
                styles.priceDescription
              }
            >
              Incluye cinco clases en vivo de
              una hora, de lunes a viernes.
            </p>

            <div
              className={
                styles.priceDetail
              }
            >
              <span aria-hidden="true">
                ✓
              </span>

              <p>
                Equivale a RD$120 por cada
                hora de clase.
              </p>
            </div>

            <div
              className={
                styles.priceDetail
              }
            >
              <span aria-hidden="true">
                ✓
              </span>

              <p>
                Máximo 10 estudiantes en
                cada grupo.
              </p>
            </div>
          </aside>
        </section>

        <WeeklyGroupClassBooking />

        <section
          className={
            styles.benefitsSection
          }
          aria-labelledby="benefits-title"
        >
          <div>
            <p
              className={
                styles.eyebrow
              }
            >
              QUÉ INCLUYE
            </p>

            <h2 id="benefits-title">
              Un espacio para aprender y
              practicar
            </h2>

            <p
              className={
                styles.sectionDescription
              }
            >
              No necesitas saberlo todo antes
              de entrar. Estas clases están
              diseñadas para ayudarte a
              construir una base clara y usar
              el inglés con más seguridad.
            </p>
          </div>

          <ul
            className={
              styles.benefitList
            }
          >
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
          className={
            styles.processSection
          }
          aria-labelledby="process-title"
        >
          <div
            className={
              styles.sectionHeading
            }
          >
            <div>
              <p
                className={
                  styles.eyebrow
                }
              >
                INSCRIPCIÓN
              </p>

              <h2 id="process-title">
                ¿Cómo reservas tu espacio?
              </h2>
            </div>
          </div>

          <ol
            className={
              styles.processGrid
            }
          >
            <li
              className={
                styles.processCard
              }
            >
              <span
                className={
                  styles.stepNumber
                }
              >
                01
              </span>

              <h3>
                Elige tu semana
              </h3>

              <p>
                Selecciona una de las semanas
                disponibles a partir del 14 de
                septiembre.
              </p>
            </li>

            <li
              className={
                styles.processCard
              }
            >
              <span
                className={
                  styles.stepNumber
                }
              >
                02
              </span>

              <h3>
                Selecciona tu grupo
              </h3>

              <p>
                Escoge uno de los tres horarios
                y reserva uno de los 10 cupos
                disponibles.
              </p>
            </li>

            <li
              className={
                styles.processCard
              }
            >
              <span
                className={
                  styles.stepNumber
                }
              >
                03
              </span>

              <h3>
                Confirma tu pago
              </h3>

              <p>
                Sube el comprobante dentro de
                Inglés con Lau. Cuando sea
                aprobado, tu reservación
                quedará confirmada.
              </p>
            </li>
          </ol>
        </section>

        <section className={styles.notice}>
          <div
            className={
              styles.noticeIcon
            }
            aria-hidden="true"
          >
            !
          </div>

          <div>
            <h2>Importante</h2>

            <p>
              La reservación inicial mantiene
              tu cupo durante 45 minutos. Para
              conservarlo, debes subir el
              comprobante de pago antes de que
              termine ese tiempo. No compartas
              el enlace privado de la clase.
            </p>
          </div>
        </section>

        <section
          className={styles.finalCta}
        >
          <p
            className={
              styles.eyebrow
            }
          >
            ¿LISTA PARA COMENZAR?
          </p>

          <h2>
            Reserva tu grupo de clases A1
          </h2>

          <p>
            Escoge tu semana, selecciona el
            horario que funcione mejor para ti
            y asegura tu espacio.
          </p>

          <a
            href="#reservar"
            className={
              styles.primaryButton
            }
          >
            Seleccionar mi semana

            <span aria-hidden="true">
              →
            </span>
          </a>
        </section>
      </div>
    </main>
  );
}