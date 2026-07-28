export default function Text() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.75rem',
        maxWidth: '520px',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          width: 'fit-content',
          padding: '0.45rem 0.9rem',
          borderRadius: '999px',
          background: '#EEF8F2',
          color: '#2F855A',
          fontSize: '0.85rem',
          fontWeight: 600,
        }}
      >
        🌱 Paso 1
      </div>

      <h2
        style={{
          margin: 0,
          fontSize: '2.4rem',
          lineHeight: 1.2,
          fontWeight: 700,
          color: '#1F2937',
        }}
      >
        Emmpieza a hablar inglés desde el primer día.
      </h2>

      <p
        style={{
          margin: 0,
          fontSize: '1.1rem',
          lineHeight: 1.8,
          color: '#6B7280',
        }}
      >
        No necesitas memorizar cientos de palabras antes de empezar a hablar.
        Desde la primera lección practicarás frases sencillas que podrás usar en
        situaciones reales.
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginTop: '0.5rem',
        }}
      >
        {[
          'Saludar de forma natural.',
          'Presentarte con confianza.',
          'Construir oraciones sencillas.',
          'Sentirte cómodo hablando desde el inicio.',
        ].map((item) => (
          <div
            key={item}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '1rem',
              color: '#374151',
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '999px',
                background: '#EEF8F2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2F855A',
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              ✓
            </div>

            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
