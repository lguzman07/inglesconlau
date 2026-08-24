import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import GroupClassPackages from '@/components/GroupClassPackages/GroupClassPackages';
import { createClient } from '@/lib/supabase/server';

import styles from './ClasesGrupales.module.css';

export const metadata: Metadata = {
  title: 'Clases grupales en vivo | Inglés con Lau',
  description:
    'Compra clases grupales en vivo y reserva libremente en los niveles A1, A2, B1, B1+ y B2.',
};

const benefits = [
  'Clases en vivo de una hora',
  'Acceso a los grupos A1, A2, B1, B1+ y B2',
  'Libertad para cambiar de nivel al reservar',
  'Práctica oral, corrección y acompañamiento en vivo',
  'Tus clases permanecen disponibles hasta agotarlas',
];

export default async function ClasesGrupalesPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(
      '/iniciar-sesion?next=%2Fclases-grupales',
    );
  }

  const paymentDetails = {
    bankName:
      process.env.GROUP_CLASS_BANK_NAME ?? '',
    accountHolder:
      process.env.GROUP_CLASS_ACCOUNT_HOLDER ?? '',
    idDocument:
      process.env.GROUP_CLASS_ID_DOCUMENT ?? '',
    productType:
      process.env.GROUP_CLASS_PRODUCT_TYPE ?? '',
    accountNumber:
      process.env.GROUP_CLASS_ACCOUNT_NUMBER ?? '',
    currency:
      process.env.GROUP_CLASS_CURRENCY ?? '',
    paymentEmail:
      process.env.GROUP_CLASS_PAYMENT_EMAIL ?? '',
    swiftCode:
      process.env.GROUP_CLASS_SWIFT_CODE ?? '',
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/inicio" className={styles.backLink}>
          ← Volver a Inicio
        </Link>

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>
              CLASES EN VIVO
            </span>

            <p className={styles.eyebrow}>
              CLASES GRUPALES
            </p>

            <h1>Aprende inglés en compañía</h1>

            <p className={styles.heroDescription}>
              Compra la cantidad de clases que prefieras.
              Después, escoge el nivel, la fecha y el horario
              de cada encuentro desde tu plataforma.
            </p>

            <div className={styles.heroActions}>
              <a
                href="#comprar"
                className={styles.primaryButton}
              >
                Ver paquetes
                <span aria-hidden="true">→</span>
              </a>

              <Link
                href="/inicio"
                className={styles.secondaryButton}
              >
                Ir a mis reservas
              </Link>
            </div>
          </div>

          <aside
            className={styles.priceCard}
            aria-label="Resumen de los paquetes"
          >
            <p className={styles.priceLabel}>
              ELIGE TU OPCIÓN
            </p>

            <div className={styles.priceRange}>
              <span>Desde</span>
              <strong>5</strong>
              <span>hasta 80 clases</span>
            </div>

            <p className={styles.priceDescription}>
              Mientras más clases compras, menor es el precio
              por cada encuentro.
            </p>

            <div className={styles.priceDetail}>
              <span aria-hidden="true">✓</span>
              <p>Sin restricciones por nivel.</p>
            </div>

            <div className={styles.priceDetail}>
              <span aria-hidden="true">✓</span>
              <p>Reserva cada clase según disponibilidad.</p>
            </div>
          </aside>
        </section>

        <GroupClassPackages
          paymentDetails={paymentDetails}
        />

        <section
          className={styles.benefitsSection}
          aria-labelledby="benefits-title"
        >
          <div>
            <p className={styles.eyebrow}>QUÉ INCLUYE</p>
            <h2 id="benefits-title">
              Aprende a tu ritmo y explora otros niveles
            </h2>
            <p className={styles.sectionDescription}>
              Tu saldo es general. Puedes continuar en tu
              nivel habitual o reservar otra clase cuando
              quieras investigar un tema diferente.
            </p>
          </div>

          <ul className={styles.benefitList}>
            {benefits.map((benefit) => (
              <li key={benefit}>
                <span aria-hidden="true">✓</span>
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
                ¿Cómo funciona?
              </h2>
            </div>
          </div>

          <ol className={styles.processGrid}>
            <li className={styles.processCard}>
              <span className={styles.stepNumber}>01</span>
              <h3>Elige tu paquete</h3>
              <p>
                Compra 5 clases, el mes de 20 clases o el
                curso completo de 80 clases.
              </p>
            </li>

            <li className={styles.processCard}>
              <span className={styles.stepNumber}>02</span>
              <h3>Envía el comprobante</h3>
              <p>
                Realiza la transferencia y envíala desde el
                correo de tu cuenta.
              </p>
            </li>

            <li className={styles.processCard}>
              <span className={styles.stepNumber}>03</span>
              <h3>Reserva tus clases</h3>
              <p>
                Cuando se active tu saldo, escoge libremente
                el nivel, la fecha y el horario.
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
              Tener clases disponibles no garantiza un cupo
              específico. Cada encuentro debe reservarse y
              los horarios llenos no podrán seleccionarse.
            </p>
          </div>
        </section>

        <section className={styles.finalCta}>
          <p className={styles.eyebrow}>
            ¿LISTA PARA COMENZAR?
          </p>
          <h2>Escoge el paquete que se adapte a ti</h2>
          <p>
            Todas las opciones te permiten reservar en
            cualquier nivel disponible.
          </p>
          <a
            href="#comprar"
            className={styles.primaryButton}
          >
            Ver paquetes
            <span aria-hidden="true">→</span>
          </a>
        </section>
      </div>
    </main>
  );
}
