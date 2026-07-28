import React from 'react';

export default function Header() {
  return (
    <div
      style={{
        maxWidth: '1450px',
        margin: '0 auto 8rem',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          color: '#8db596',
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
          color: '#2f3437',
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
          color: '#6b7280',
          fontSize: '1.2rem',
          lineHeight: '2',
        }}
      >
        No encontrarás una colección de clases al azar.
        <br />
        Cada lección prepara la siguiente para que avanzar se sienta natural.
      </p>

      <div
        style={{
          marginTop: '5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          width: '100%',
          gap: '1rem',
        }}
      >
        <span style={bubble}>🌱 Hablar</span>

        <span style={arrow}>⟶</span>

        <span style={bubble}>🎙️ Pronunciar</span>

        <span style={arrow}>⟶</span>

        <span style={bubble}>🧠 Entender</span>

        <span style={arrow}>⟶</span>

        <span style={bubble}>💬 Conversar</span>

        <span style={arrow}>⟶</span>

        <span style={bubble}>🌎 Vivir el inglés</span>
      </div>
    </div>
  );
}

const bubble: React.CSSProperties = {
  background: '#ffffff',
  border: '1px solid #ececec',
  borderRadius: '999px',
  padding: '1rem 1.8rem',
  fontWeight: 600,
  color: '#2f3437',
  whiteSpace: 'nowrap',
  boxShadow: '0 4px 12px rgba(0,0,0,.03)',
  flexShrink: 0,
};

const arrow: React.CSSProperties = {
  color: '#8db596',
  fontSize: '1.6rem',
  fontWeight: 700,
  flexShrink: 0,
};
