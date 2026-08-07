import React from 'react';

export default function Header() {
  return (
    <div
      style={{
        maxWidth: '1450px',
        margin: '0 auto 5rem',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          color: 'var(--primary)',
          fontSize: '1.75rem',
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}
      >
        TU RECORRIDO
      </p>

      <h2
        style={{
          fontSize: 'clamp(2.8rem,5vw,4.8rem)',
          lineHeight: 1.1,
          color: 'var(--text)',
          marginBottom: '2rem',
        }}
      >
        Así es como
        <br />
        aprenderás inglés.
      </h2>

      <p
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          color: 'var(--text-light)',
          fontSize: '1.2rem',
          lineHeight: 2,
        }}
      >
        No encontrarás una colección de clases al azar.
        <br />
        Cada lección prepara la siguiente para que avanzar se sienta natural.
      </p>
    </div>
  );
}