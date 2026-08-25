'use client';

import { useMemo, useState } from 'react';

import styles from './GroupClassPackages.module.css';

type PaymentDetails = {
  bankName: string;
  accountHolder: string;
  idDocument: string;
  productType: string;
  accountNumber: string;
  currency: string;
  paymentEmail: string;
  swiftCode: string;
};

type GroupClassPackagesProps = {
  paymentDetails: PaymentDetails;
};

const PACKAGES = [
  {
    id: 'flexible-5',
    name: 'Paquete flexible',
    classes: 5,
    price: 600,
    pricePerClass: 120,
    description:
      'Ideal para probar las clases o complementar tu práctica.',
    badge: '',
  },
  {
    id: 'month-20',
    name: 'Mes completo',
    classes: 20,
    price: 1900,
    pricePerClass: 95,
    description:
      'Veinte clases para estudiar con constancia durante el mes.',
    badge: 'Ahorra RD$500',
  },
  {
    id: 'complete-80',
    name: 'Curso completo',
    classes: 80,
    price: 7000,
    pricePerClass: 87.5,
    description:
      'La opción con el precio más bajo por clase y mayor continuidad.',
    badge: 'Mejor valor',
  },
] as const;

function formatMoney(value: number) {
  return new Intl.NumberFormat('es-DO', {
    minimumFractionDigits: Number.isInteger(value)
      ? 0
      : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function PaymentRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  if (!value) return null;

  return (
    <div className={styles.paymentRow}>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export default function GroupClassPackages({
  paymentDetails,
}: GroupClassPackagesProps) {
  const [selectedPackageId, setSelectedPackageId] =
    useState<string>('month-20');

  const selectedPackage =
    PACKAGES.find(
      (item) => item.id === selectedPackageId,
    ) ?? PACKAGES[1];

  const emailHref = useMemo(() => {
    if (!paymentDetails.paymentEmail) return '';

    const subject = encodeURIComponent(
      `Comprobante: ${selectedPackage.name} de ${selectedPackage.classes} clases`,
    );

    const body = encodeURIComponent(
      [
        'Hola, Lau:',
        '',
        `Compré el ${selectedPackage.name.toLowerCase()} de ${selectedPackage.classes} clases por RD$${formatMoney(selectedPackage.price)}.`,
        '',
        'Adjunto mi comprobante de pago.',
        '',
        'Nombre completo:',
        'Correo de mi cuenta:',
      ].join('\n'),
    );

    return `mailto:${paymentDetails.paymentEmail}?subject=${subject}&body=${body}`;
  }, [paymentDetails.paymentEmail, selectedPackage]);

  return (
    <section
      id="comprar"
      className={styles.section}
      aria-labelledby="packages-title"
    >
      <div className={styles.heading}>
        <p className={styles.eyebrow}>
          ESCOGE TU PAQUETE
        </p>
        <h2 id="packages-title">
          Compra clases para usar en cualquier nivel
        </h2>
        <p>
          Tus clases no quedan atadas a A1, A2, B1 o B2. Cuando reserves, podrás escoger el
          nivel que quieras explorar.
        </p>
      </div>

      <div
        className={styles.packageGrid}
        role="radiogroup"
        aria-label="Paquetes de clases grupales"
      >
        {PACKAGES.map((item) => {
          const isSelected =
            item.id === selectedPackage.id;

          return (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              className={`${styles.packageCard} ${isSelected
                  ? styles.packageCardSelected
                  : ''
                } ${item.id === 'complete-80'
                  ? styles.bestValueCard
                  : ''
                }`}
              onClick={() =>
                setSelectedPackageId(item.id)
              }
            >
              {item.badge ? (
                <span className={styles.packageBadge}>
                  {item.badge}
                </span>
              ) : null}

              <span className={styles.packageName}>
                {item.name}
              </span>

              <strong className={styles.classCount}>
                {item.classes} clases
              </strong>

              <span className={styles.packagePrice}>
                <small>RD$</small>
                {formatMoney(item.price)}
              </span>

              <span className={styles.perClass}>
                RD${formatMoney(item.pricePerClass)} por
                clase
              </span>

              <span className={styles.packageDescription}>
                {item.description}
              </span>

              <span className={styles.selectLabel}>
                {isSelected
                  ? 'Paquete seleccionado'
                  : 'Elegir este paquete'}
              </span>
            </button>
          );
        })}
      </div>

      <div className={styles.purchasePanel}>
        <div className={styles.purchaseSummary}>
          <p>PAQUETE SELECCIONADO</p>
          <h3>{selectedPackage.name}</h3>
          <span>
            {selectedPackage.classes} clases · RD$
            {formatMoney(selectedPackage.price)}
          </span>
          <strong>
            Podrás reservar en cualquier nivel disponible.
          </strong>
        </div>

        <div className={styles.paymentCard}>
          <div>
            <p className={styles.eyebrow}>
              DATOS PARA EL PAGO
            </p>
            <h3>Realiza la transferencia</h3>
            <p className={styles.paymentIntro}>
              Transfiere exactamente RD$
              {formatMoney(selectedPackage.price)} y envía
              el comprobante desde el correo de tu cuenta.
            </p>
          </div>

          <dl className={styles.paymentDetails}>
            <PaymentRow
              label="Banco"
              value={paymentDetails.bankName}
            />
            <PaymentRow
              label="Titular"
              value={paymentDetails.accountHolder}
            />
            <PaymentRow
              label="Cédula"
              value={paymentDetails.idDocument}
            />
            <PaymentRow
              label="Tipo de cuenta"
              value={paymentDetails.productType}
            />
            <PaymentRow
              label="Número de cuenta"
              value={paymentDetails.accountNumber}
            />
            <PaymentRow
              label="Moneda"
              value={paymentDetails.currency}
            />
            <PaymentRow
              label="Código SWIFT"
              value={paymentDetails.swiftCode}
            />
          </dl>

          {emailHref ? (
            <a
              className={styles.emailButton}
              href={emailHref}
            >
              Enviar comprobante por correo
            </a>
          ) : (
            <p className={styles.missingEmail}>
              El correo para comprobantes todavía no está
              configurado.
            </p>
          )}

          <p className={styles.activationNote}>
            Las clases se añadirán a tu saldo después de
            verificar el pago. Tener saldo no garantiza un
            horario; cada clase debe reservarse por separado.
          </p>
        </div>
      </div>
    </section>
  );
}
