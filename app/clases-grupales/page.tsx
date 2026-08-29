import type { Metadata } from 'next';
import Link from 'next/link';

import GroupClassPackages from '@/components/GroupClassPackages/GroupClassPackages';
import { createClient } from '@/lib/supabase/server';

import styles from './ClasesGrupales.module.css';

export const metadata: Metadata = {
  title: 'Clases grupales en vivo | Inglés con Lau',
  description:
    'Escoge un paquete y reserva tu horario para las clases grupales de A1, A2, B1 o B2.',
};

const benefits = [
  'Clases en vivo de una hora',
  'Grupos A1, A2, B1 y B2',
  'Máximo 10 estudiantes por clase',
  'Libertad para explorar otro nivel al cambiar una reserva',
  'Práctica oral, corrección y acompañamiento en vivo',
];

function getDominicanToday() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'America/Santo_Domingo',
  }).formatToParts(new Date());

  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function getDaysUntilStart() {
  const today = new Date(`${getDominicanToday()}T00:00:00`);
  const start = new Date('2026-09-14T00:00:00');
  return Math.round((start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

export default async function ClasesGrupalesPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const daysUntilStart = getDaysUntilStart();

  const paymentDetails = {
    bankName: process.env.GROUP_CLASS_BANK_NAME ?? '',
    accountHolder: process.env.GROUP_CLASS_ACCOUNT_HOLDER ?? '',
    idDocument: process.env.GROUP_CLASS_ID_DOCUMENT ?? '',
    productType: process.env.GROUP_CLASS_PRODUCT_TYPE ?? '',
    accountNumber: process.env.GROUP_CLASS_ACCOUNT_NUMBER ?? '',
    currency: process.env.GROUP_CLASS_CURRENCY ?? '',
    paymentEmail: process.env.GROUP_CLASS_PAYMENT_EMAIL ?? '',
    swiftCode: process.env.GROUP_CLASS_SWIFT_CODE ?? '',
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href={user ? '/inicio' : '/en-vivo'} className={styles.backLink}>
          {user ? '← Volver a Inicio' : '← Volver al inicio'}
        </Link>

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>CLASES EN VIVO</span>
            <p className={styles.eyebrow}>
              {daysUntilStart > 0
                ? `FALTAN ${daysUntilStart} DÍA${daysUntilStart === 1 ? '' : 'S'} · INICIO 14 DE SEPTIEMBRE`
                : 'INICIO · 14 DE SEPTIEMBRE DE 2026'}
            </p>
            <h1>Elige primero el horario que funciona para ti</h1>
            <p className={styles.heroDescription}>
              Las clases duran 16 semanas. Antes de pagar verás el nivel, el
              horario y los cupos disponibles. No necesitas crear una cuenta
              para explorarlos: solo te la pediremos al final, cuando vayas a
              apartar tu horario.
            </p>
            <div className={styles.heroActions}>
              <a href="#comprar" className={styles.primaryButton}>
                Ver paquetes y horarios <span aria-hidden="true">→</span>
              </a>
              <Link href="/inicio" className={styles.secondaryButton}>
                Ir a mis reservas
              </Link>
            </div>
          </div>

          <aside className={styles.priceCard} aria-label="Opciones de compra">
            <p className={styles.priceLabel}>CUATRO OPCIONES</p>
            <div className={styles.packageSummary}>
              <strong>1</strong><span>clase de prueba · RD$100</span>
              <strong>5</strong><span>clases · 1 semana</span>
              <strong>20</strong><span>clases · 4 semanas</span>
              <strong>80</strong><span>clases · curso completo</span>
            </div>
            <p className={styles.priceDescription}>
              El curso completo cuesta RD$7,000 y ahorra RD$2,600 frente al
              precio regular de las 80 clases.
            </p>
          </aside>
        </section>

        <GroupClassPackages
          paymentDetails={paymentDetails}
          isLoggedIn={!!user}
          daysUntilStart={daysUntilStart}
        />

        <section className={styles.benefitsSection} aria-labelledby="benefits-title">
          <div>
            <p className={styles.eyebrow}>QUÉ INCLUYE</p>
            <h2 id="benefits-title">Tu horario principal, con libertad para explorar</h2>
            <p className={styles.sectionDescription}>
              Al aprobar el pago, tus clases quedarán reservadas en el horario
              elegido. Si quieres explorar, cancela una fecha y utiliza ese
              crédito en otro nivel u horario con cupo.
            </p>
          </div>
          <ul className={styles.benefitList}>
            {benefits.map((benefit) => (
              <li key={benefit}><span aria-hidden="true">✓</span><p>{benefit}</p></li>
            ))}
          </ul>
        </section>

        <section className={styles.processSection} aria-labelledby="process-title">
          <p className={styles.eyebrow}>INSCRIPCIÓN</p>
          <h2 id="process-title">¿Cómo funciona?</h2>
          <ol className={styles.processGrid}>
            <li className={styles.processCard}><span>01</span><h3>Escoge el paquete</h3><p>Selecciona 5, 20 u 80 clases.</p></li>
            <li className={styles.processCard}><span>02</span><h3>Escoge el horario</h3><p>Verás los niveles, horas y cupos antes de pagar.</p></li>
            <li className={styles.processCard}><span>03</span><h3>Crea tu cuenta</h3><p>Solo te la pedimos al confirmar, no antes de explorar.</p></li>
            <li className={styles.processCard}><span>04</span><h3>Envía el comprobante</h3><p>El horario se aparta 2 horas mientras se verifica.</p></li>
            <li className={styles.processCard}><span>05</span><h3>Recibe tus reservas</h3><p>Al aprobarse, las fechas aparecen automáticamente en tu cuenta.</p></li>
          </ol>
        </section>
      </div>
    </main>
  );
}
