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

            <p>
              Aprendí inglés de una manera bastante inusual. Sí, tomé clases, pero la
              mayoría de lo aprendido fue a través de métodos que muchos no considerarían
              tradicionales: escuchar música, ver series, películas, hablar con mis amigos
              con el mucho o poco inglés que supiéramos… Verán, al aprenderlo desde niña
              tuve una ventaja bastante significativa. Los niños son como esponjas, lo
              absorben todo: tanto lo bueno como lo malo. Es por eso que siempre escuchan:
              “ponlo desde chiquito en clases que así aprende más fácil.”
            </p>

            <p>
              Dicho esto, aprender como adulto, a pesar de ser menos intuitivo y en
              ocasiones más difícil (de no aprender con las herramientas correctas), tiene
              una particularidad muy hermosa, y es que aprendemos porque deseamos hacerlo.
              No presentamos esa resistencia del “¡no quiero!”, y es que ya en nuestra
              adultez podemos decidir qué aprender y qué no aprender. Claro, en muchos de
              los casos quizás sí nos veamos forzados a aprender el idioma: porque sabemos
              que con el inglés tendremos más oportunidades laborales, porque nuestro
              trabajo actual lo requiere para poder seguir escalando, en fin. Un sinnúmero
              de razones, todas buenas y válidas, para aprenderlo.
            </p>

            <p>
              Dicho esto, quiero expresarte por qué me apasiona tanto enseñar y de dónde
              viene esta idea.
            </p>

            <p>
              Habiendo aprendido inglés de una manera tan inusual, pude adquirir una
              intuición por el idioma que no todos tienen, y es que aprender inglés no es
              tan difícil como se pinta. Tiene sus reglas gramaticales, sus puntos no tan
              sencillos, pero visto de manera objetiva, el inglés es mucho más fácil que el
              español.
            </p>

            <p>
              Los adjetivos no tienen ni género ni número: una manzana roja o tres carros
              rojos en inglés es <strong>a red apple</strong> y{' '}
              <strong>three red cars</strong>.
            </p>

            <p>Conjugar también es mucho más fácil:</p>

            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                margin: '0.5rem 0',
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#ffffff',
                boxShadow: '0 8px 24px rgba(0,0,0,.05)',
              }}
            >
              <thead>
                <tr style={{ background: '#fff8f6' }}>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      color: '#2f3437',
                    }}
                  >
                    Español
                  </th>

                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      color: '#2f3437',
                    }}
                  >
                    Inglés
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  ['Yo hago', 'I do'],
                  ['Tú haces', 'You do'],
                  ['Él hace', 'He does'],
                  ['Ella hace', 'She does'],
                  ['Nosotros hacemos', 'We do'],
                  ['Ustedes hacen', 'You do'],
                  ['Ellos hacen', 'They do'],
                ].map(([es, en]) => (
                  <tr
                    key={es}
                    style={{
                      borderTop: '1px solid #ece8e4',
                    }}
                  >
                    <td style={{ padding: '0.9rem 1rem' }}>{es}</td>

                    <td
                      style={{
                        padding: '0.9rem 1rem',
                        fontWeight: 700,
                        color: '#8db596',
                      }}
                    >
                      {en}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p>
              ¿Pueden verlo? Lo complicado viene por el miedo a aprenderlo, por pensar que
              no somos lo suficientemente capaces o inteligentes para aprender un idioma
              desde cero. Y por eso tengo dos cosas que decirte:
            </p>

            <p>
              <strong>SÍ eres lo suficientemente inteligente y capaz.</strong>
            </p>

            <p>
              <strong>NO lo estarías aprendiendo desde cero.</strong> El español y el inglés
              tienen un sinnúmero de similitudes, <strong>INCLUSO, en la pronunciación.</strong>{' '}
              Y es algo que podrás ver a través de todo este curso.
            </p>

            <p>
              Mi amor por enseñar viene precisamente de eso, de poder demostrarles a las
              personas que son inteligentes, que son capaces, y que no está fuera de sus
              posibilidades aprender un idioma nuevo. Nace de querer ayudar a la gran
              comunidad de dominicanos e hispanohablantes en general a aprender algo que
              muchas veces pensaron imposible, de hacerlo de una manera fácil, intuitiva,
              con herramientas prácticas y pedagógicas que solamente sumarán a tu
              aprendizaje y harán de él <strong>a rewarding experience.</strong>
            </p>

            <p>
              <strong>
                ¡Acompáñame en este viaje que es el aprendizaje y permíteme demostrarte de
                lo que eres capaz!
              </strong>
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
          &ldquo;No te enseño inglés como si empezaras desde cero.
          <br />
          Te lo enseño a partir de algo que ya conoces perfectamente:
          <span style={{ color: '#8db596' }}> el español.</span>&rdquo;
        </h3>
      </div>
    </section>
  );
}