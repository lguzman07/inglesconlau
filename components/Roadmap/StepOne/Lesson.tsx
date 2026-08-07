import AudioPlayer from '@/components/AudioPlayer/AudioPlayer';
import NameSetup from '@/components/NameSetup/NameSetup';

export default function Lesson() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '520px',
        background: 'var(--surface-solid)',
        color: 'var(--text)',
        borderRadius: '28px',
        padding: '2rem',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow)',
      }}
    >
      {/* Header */}

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              color: 'var(--accent)',
              fontWeight: 700,
              fontSize: '.9rem',
              letterSpacing: '1px',
            }}
          >
            LESSON 1
          </p>

          <h3
            style={{
              margin: '.5rem 0 0',
              color: 'var(--text)',
              fontSize: '1.7rem',
            }}
          >
            👋 Tu primera conversación en inglés
          </h3>
        </div>

        <div
          style={{
            width: '54px',
            height: '54px',
            flexShrink: 0,
            borderRadius: '50%',
            background: 'var(--primary-light)',
            border: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.5rem',
          }}
        >
          💬
        </div>
      </div>

      {/* Profesora */}

      <div
        style={{
          background: 'var(--surface-soft)',
          border: '1px solid var(--border)',
          borderRadius: '18px',
          padding: '1.2rem',
          marginBottom: '1rem',
        }}
      >
        <p
          style={{
            margin: '0 0 .9rem',
            color: 'var(--accent)',
            fontWeight: 700,
            fontSize: '.9rem',
          }}
        >
          👩 Profesora
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '1.35rem',
              fontWeight: 700,
              color: 'var(--text)',
            }}
          >
            Hello!
          </p>

          <AudioPlayer text="Hello!" language="en" />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '.8rem',
          }}
        >
          <p
            style={{
              margin: 0,
              color: 'var(--text-light)',
            }}
          >
            🇪🇸 ¡Hola!
          </p>

          <AudioPlayer text="¡Hola!" language="es" />
        </div>
      </div>

      {/* Tú */}

      <div
        style={{
          background: 'var(--surface-soft)',
          border: '1px solid var(--border)',
          borderRadius: '18px',
          padding: '1.2rem',
          marginBottom: '1rem',
        }}
      >
        <p
          style={{
            margin: '0 0 .9rem',
            color: 'var(--primary)',
            fontWeight: 700,
            fontSize: '.9rem',
          }}
        >
          👨 Tú
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '1.35rem',
              fontWeight: 700,
              color: 'var(--text)',
            }}
          >
            Hi!
          </p>

          <AudioPlayer text="Hi!" language="en" />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '.8rem',
          }}
        >
          <p
            style={{
              margin: 0,
              color: 'var(--text-light)',
            }}
          >
            🇪🇸 ¡Hola!
          </p>

          <AudioPlayer text="¡Hola!" language="es" />
        </div>
      </div>

      {/* Profesora */}

      <div
        style={{
          background: 'var(--surface-soft)',
          border: '1px solid var(--border)',
          borderRadius: '18px',
          padding: '1.2rem',
          marginBottom: '1rem',
        }}
      >
        <p
          style={{
            margin: '0 0 .9rem',
            color: 'var(--accent)',
            fontWeight: 700,
            fontSize: '.9rem',
          }}
        >
          👩 Profesora
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '1.35rem',
              fontWeight: 700,
              color: 'var(--text)',
            }}
          >
            What&apos;s your name?
          </p>

          <AudioPlayer text="What's your name?" language="en" />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '.8rem',
          }}
        >
          <p
            style={{
              margin: 0,
              color: 'var(--text-light)',
            }}
          >
            🇪🇸 ¿Cómo te llamas?
          </p>

          <AudioPlayer text="¿Cómo te llamas?" language="es" />
        </div>
      </div>

      {/* Tú */}

      <NameSetup />

      {/* Objetivo */}

      <div
        style={{
          marginTop: '2rem',
          padding: '1rem',
          borderRadius: '18px',
          background: 'var(--primary-light)',
          color: 'var(--text)',
          border: '1px solid var(--border)',
        }}
      >
        <strong>🎯 Objetivo de la lección</strong>

        <p
          style={{
            margin: '.6rem 0 0',
            color: 'var(--text-light)',
            lineHeight: 1.7,
          }}
        >
          Al terminar esta lección podrás saludar, preguntar un nombre y
          presentarte en inglés con confianza.
        </p>
      </div>
    </div>
  );
}