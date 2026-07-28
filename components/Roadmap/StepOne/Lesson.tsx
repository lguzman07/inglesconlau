import AudioPlayer from '@/components/AudioPlayer';
import NameSetup from '@/components/NameSetup';

export default function Lesson() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '520px',
        background: '#ffffff',
        borderRadius: '28px',
        padding: '2rem',
        border: '1px solid #ececec',
        boxShadow: '0 20px 60px rgba(0,0,0,.08)',
      }}
    >
      {/* Header */}

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              color: '#8db596',
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
              color: '#2f3437',
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
            borderRadius: '50%',
            background: '#EEF8F2',
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
          background: '#F8F9FB',
          borderRadius: '18px',
          padding: '1.2rem',
          marginBottom: '1rem',
        }}
      >
        <p
          style={{
            margin: 0,
            color: '#8db596',
            fontWeight: 700,
            fontSize: '.9rem',
            marginBottom: '.9rem',
          }}
        >
          👩 Profesora
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '1.35rem',
              fontWeight: 700,
              color: '#2f3437',
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
            marginTop: '.8rem',
          }}
        >
          <p
            style={{
              margin: 0,
              color: '#6b7280',
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
          background: '#F8F9FB',
          borderRadius: '18px',
          padding: '1.2rem',
          marginBottom: '1rem',
        }}
      >
        <p
          style={{
            margin: 0,
            color: '#5A8DEE',
            fontWeight: 700,
            fontSize: '.9rem',
            marginBottom: '.9rem',
          }}
        >
          👨 Tú
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '1.35rem',
              fontWeight: 700,
              color: '#2f3437',
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
            marginTop: '.8rem',
          }}
        >
          <p
            style={{
              margin: 0,
              color: '#6b7280',
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
          background: '#F8F9FB',
          borderRadius: '18px',
          padding: '1.2rem',
          marginBottom: '1rem',
        }}
      >
        <p
          style={{
            margin: 0,
            color: '#8db596',
            fontWeight: 700,
            fontSize: '.9rem',
            marginBottom: '.9rem',
          }}
        >
          👩 Profesora
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '1.35rem',
              fontWeight: 700,
              color: '#2f3437',
            }}
          >
            What's your name?
          </p>

          <AudioPlayer text="What's your name?" language="en" />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '.8rem',
          }}
        >
          <p
            style={{
              margin: 0,
              color: '#6b7280',
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
          background: '#FFF8E8',
          border: '1px solid #F3E2A9',
        }}
      >
        <strong>🎯 Objetivo de la lección</strong>

        <p
          style={{
            margin: '.6rem 0 0',
            color: '#5b5b5b',
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
