import type {
  Metadata,
} from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import WeeklyGroupClassBooking from '@/components/WeeklyGroupClassBooking/WeeklyGroupClassBooking';
import { createClient } from '@/lib/supabase/server';

import styles from './ClasesGrupales.module.css';

export const metadata: Metadata = {
  title:
    'Clases grupales A1 | Inglés con Lau',
  description:
    'Compra un paquete de cinco clases grupales A1 en vivo con Inglés con Lau.',
};

const benefits = [
  'Cinco clases en vivo por paquete',
  'Grupos pequeños de hasta 10 estudiantes',
  'Explicaciones claras desde el nivel A1',
  'Práctica oral durante cada encuentro',
  'Corrección y acompañamiento en vivo',
  'Las clases permanecen disponibles hasta agotarlas',
];

export default async function ClasesGrupalesPage() {
  const supabase =
    createClient();

  const {
    data: { user },
  } =
    await supabase.auth.getUser();

  if (!user) {
    redirect(
      '/iniciar-sesion?next=%2Fclases-grupales',
    );
  }

  const paymentDetails = {
    bankName:
      process.env
        .GROUP_CLASS_BANK_NAME ?? '',
    accountHolder:
      process.env
        .GROUP_CLASS_ACCOUNT_HOLDER ?? '',
    idDocument:
      process.env
        .GROUP_CLASS_ID_DOCUMENT ?? '',
    productType:
      process.env
        .GROUP_CLASS_PRODUCT_TYPE ?? '',
    accountNumber:
      process.env
        .GROUP_CLASS_ACCOUNT_NUMBER ?? '',
    currency:
      process.env
        .GROUP_CLASS_CURRENCY ?? '',
    paymentEmail:
      process.env
        .GROUP_CLASS_PAYMENT_EMAIL ?? '',
    swiftCode:
      process.env
        .GROUP_CLASS_SWIFT_CODE ?? '',
  };

  return (
    <main className={styles.main}>
      <div
        className={styles.container}
      >
        <Link
          href="/inicio"
          className={
            styles.backLink
          }
        >
          ← Volver a Inicio
        </Link>

        <section
          className={styles.hero}
        >
          <div
            className={
              styles.heroContent
            }
          >
            <span
              className={
                styles.badge
              }
            >
              CLASES EN VIVO
            </span>

            <p
              className={
                styles.eyebrow
              }
            >
              CLASES GRUPALES A1
            </p>

            <h1>
              Aprende inglés en
              compañía
            </h1>

            <p
              className={
                styles.heroDescription
              }
            >
              Elige el grupo que mejor
              se adapte a ti y compra
              un paquete de cinco
              clases para usar hasta
              agotarlas.
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
                Reservar mis 5 clases
                <span
                  aria-hidden="true"
                >
                  →
                </span>
              </a>

              <a
                href="#reservar"
                className={
                  styles.secondaryButton
                }
              >
                Ver horarios
              </a>
            </div>
          </div>

          <aside
            className={
              styles.priceCard
            }
            aria-label="Precio del paquete"
          >
            <p
              className={
                styles.priceLabel
              }
            >
              PAQUETE DE 5 CLASES
            </p>

            <div
              className={styles.price}
            >
              <span>RD$</span>
              <strong>600</strong>
            </div>

            <p
              className={
                styles.priceDescription
              }
            >
              Incluye cinco clases en
              vivo de una hora.
            </p>

            <div
              className={
                styles.priceDetail
              }
            >
              <span
                aria-hidden="true"
              >
                ✓
              </span>
              <p>
                RD$120 por cada hora
                de clase.
              </p>
            </div>

            <div
              className={
                styles.priceDetail
              }
            >
              <span
                aria-hidden="true"
              >
                ✓
              </span>
              <p>
                Compra otro paquete
                cuando agotes tus
                clases.
              </p>
            </div>
          </aside>
        </section>

        <WeeklyGroupClassBooking
          paymentDetails={
            paymentDetails
          }
        />

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
              Un espacio para aprender
              y practicar
            </h2>

            <p
              className={
                styles.sectionDescription
              }
            >
              Después de enviar el
              comprobante por correo,
              Lau verificará el pago y
              activará tus cinco
              clases.
            </p>
          </div>

          <ul
            className={
              styles.benefitList
            }
          >
            {benefits.map(
              (benefit) => (
                <li key={benefit}>
                  <span
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <p>{benefit}</p>
                </li>
              ),
            )}
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
                ¿Cómo compras tu
                paquete?
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
                Elige tu grupo
              </h3>
              <p>
                Selecciona el horario
                que mejor se adapte a
                ti.
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
                Realiza el pago
              </h3>
              <p>
                Usa los datos
                bancarios que
                aparecerán después de
                solicitar el paquete.
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
                Envía el comprobante
              </h3>
              <p>
                Envíalo por correo.
                Cuando sea verificado,
                Lau activará tus cinco
                clases.
              </p>
            </li>
          </ol>
        </section>

        <section
          className={styles.notice}
        >
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
              Solicitar el paquete no
              confirma el pago. Tus
              cinco clases se activan
              después de verificar el
              comprobante enviado por
              correo.
            </p>
          </div>
        </section>

        <section
          className={
            styles.finalCta
          }
        >
          <p
            className={
              styles.eyebrow
            }
          >
            ¿LISTA PARA COMENZAR?
          </p>
          <h2>
            Compra tu paquete de
            clases A1
          </h2>
          <p>
            Elige tu grupo y reserva
            tus cinco clases.
          </p>
          <a
            href="#reservar"
            className={
              styles.primaryButton
            }
          >
            Reservar mis 5 clases
            <span
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </section>
      </div>
    </main>
  );
}