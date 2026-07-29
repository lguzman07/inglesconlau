import Image from 'next/image';

export default function Methodology() {
  return (
    <section
      id="methodology"
      style={{
        padding: '3.5rem 2rem 4rem',
        background: '#ffffff',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.2fr .8fr',
          gap: '3rem',
          alignItems: 'center',
        }}
      >
        <div>
          <p
            style={{
              color: '#8db596',
              fontSize: '1.75rem',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Nuestra historia
          </p>

          <h2
            style={{
              fontSize: 'clamp(2.2rem,5vw,3.5rem)',
              lineHeight: 1.15,
              marginBottom: '2rem',
              color: '#2f3437',
            }}
          >
            Una metodología creada por y para hispanohablantes.
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              fontSize: '1.1rem',
              lineHeight: 1.9,
              color: '#6b7280',
            }}
          >
            <p>Aprendí inglés de una forma bastante natural.</p>

            <p>
              Sí, tomé clases, pero gran parte de mi aprendizaje vino de estar
              expuesta al idioma desde pequeña: viendo películas, escuchando
              música y rodeándome del inglés durante muchos años.
            </p>

            <p>
              Con el tiempo descubrí que esa experiencia me dio algo muy
              valioso: una intuición del idioma.
            </p>

            <p>
              Sin embargo, cuando comencé a enseñar inglés a estudiantes
              hispanohablantes, entendí que{' '}
              <strong>
                no todo el mundo tiene la oportunidad de aprender de esa manera.
              </strong>
            </p>

            <p>
              La mayoría necesita una guía clara, entender por qué las cosas
              funcionan como funcionan y ganar confianza antes de atreverse a
              hablar.
            </p>

            <p>
              Fue ahí donde nació <strong>English With Lau</strong>.
            </p>

            <p>No para replicar la forma en la que yo aprendí.</p>

            <p>
              Sino para crear la forma en la que creo que{' '}
              <strong>es mejor enseñar.</strong>
            </p>

            <p>
              Una metodología creada por una persona que entiende las
              dificultades que puede tener un hispanohablante al aprender inglés
              y que sabe cómo hacer ese proceso más fácil, comparando el inglés
              con algo que ya conoces perfectamente:{' '}
              <strong>el español.</strong>
            </p>

            <p>
              Porque aprender un idioma no siempre consiste en memorizar más
              reglas.
            </p>

            <p>
              Muchas veces consiste en que alguien te ayude a entender el inglés
              utilizando algo que ya conoces.
            </p>

            <p>
              Esa es la idea detrás de <strong>English With Lau.</strong>
            </p>

            <p
              style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                color: '#2f3437',
              }}
            >
              No enseñarte a memorizar inglés.
              <br />
              Enseñarte a entenderlo.
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/me.png"
            alt="Laura"
            width={420}
            height={525}
            priority
            style={{
              width: '100%',
              maxWidth: '420px',
              height: 'auto',
              borderRadius: '24px',
              objectFit: 'cover',
              boxShadow: '0 12px 30px rgba(0,0,0,.08)',
              marginTop: '-2rem',
              transform: 'translateY(-350px)',
            }}
          />
        </div>
      </div>

      <div
        style={{
          maxWidth: '900px',
          margin: '3rem auto 0',
          textAlign: 'center',
          padding: '2.5rem',
          borderRadius: '24px',
          background: '#fff8f6',
        }}
      >
        <h3
          style={{
            fontSize: 'clamp(1.8rem,4vw,2.6rem)',
            lineHeight: 1.5,
            color: '#2f3437',
            fontWeight: 700,
          }}
        >
          "No te enseño inglés como si empezaras desde cero.
          <br />
          Te lo enseño a partir de algo que ya conoces perfectamente:
          <span style={{ color: '#8db596' }}> el español.</span>"
        </h3>
      </div>
    </section>
  );
}