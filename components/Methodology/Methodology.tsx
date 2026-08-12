import Image from 'next/image';
import me from '@/app/assets/me.png';
import styles from './Methodology.module.css';

const adjectiveRows = [
  ['Una manzana roja', 'A red apple'],
  ['Tres manzanas rojas', 'Three red apples'],
  ['Un carro rojo', 'A red car'],
  ['Tres carros rojos', 'Three red cars'],
];

const conjugationRows = [
  ['Yo hago', 'I do'],
  ['Tú haces', 'You do'],
  ['Él hace', 'He does'],
  ['Ella hace', 'She does'],
  ['Nosotros hacemos', 'We do'],
  ['Ustedes hacen', 'You do'],
  ['Ellos hacen', 'They do'],
];

export default function Methodology() {
  return (
    <section id="methodology" className={styles.methodology}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <p className={styles.eyebrow}>Nuestra historia</p>

            <h2 className={styles.title}>
              Una metodología creada por y para hispanohablantes.
            </h2>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src={me}
              alt="Laura, creadora de Inglés con Lau"
              priority
            />
          </div>
        </header>

        <div className={styles.content}>
          <p>
            Aprendí inglés de una manera bastante inusual. Sí, tomé clases, pero
            la mayoría de lo aprendido fue a través de métodos que muchos no
            considerarían tradicionales: escuchar música, ver series, películas,
            hablar con mis amigos con el mucho o poco inglés que supiéramos…
            Verás, al aprenderlo desde niña tuve una ventaja bastante
            significativa. Los niños son como esponjas: lo absorben todo. Es por
            eso que es tan común escuchar: “ponlo desde chiquito en clases que
            así aprende más fácil”.
          </p>

          <p>
            Dicho esto, aprender como adulto, a pesar de ser menos intuitivo y
            en ocasiones más difícil —de no aprender con las herramientas
            correctas—, tiene una particularidad muy hermosa, y es que
            aprendemos porque deseamos hacerlo. No presentamos esa resistencia
            del “¡no quiero!”, y es que ya en nuestra adultez podemos decidir
            qué aprender y qué no aprender. Claro, en muchos de los casos quizás
            sí nos veamos forzados a aprender el idioma: porque sabemos que con
            el inglés tendremos más oportunidades laborales, porque nuestro
            trabajo actual lo requiere para poder seguir escalando, en fin. Un
            sinnúmero de razones, todas buenas y válidas, para aprenderlo.
          </p>

          <p>
            Quiero expresarte por qué me apasiona tanto enseñar y de dónde viene
            esta idea.
          </p>

          <p>
            Habiendo aprendido inglés de una manera tan inusual, pude adquirir
            una intuición por el idioma que no todos tienen, y es que aprender
            inglés no es tan difícil como se pinta. Tiene sus reglas
            gramaticales, sus puntos no tan sencillos, pero visto de manera
            objetiva, el inglés es mucho más fácil que el español.
          </p>

          <div className={styles.comparisonRow}>
            <div className={styles.comparisonText}>
              <p>
                Los adjetivos no tienen ni género ni número. En español decimos{' '}
                <strong>una manzana roja</strong>, pero también{' '}
                <strong>tres manzanas rojas</strong>. O{' '}
                <strong>un carro rojo</strong> y{' '}
                <strong>tres carros rojos</strong>. En inglés, en cambio, el
                adjetivo nunca cambia:
              </p>
            </div>

            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Español</th>
                    <th>Inglés</th>
                  </tr>
                </thead>

                <tbody>
                  {adjectiveRows.map(([spanish, english]) => (
                    <tr key={spanish}>
                      <td>{spanish}</td>
                      <td className={styles.englishCell}>{english}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.comparisonRow}>
            <div className={styles.comparisonText}>
              <p>Conjugar también es mucho más fácil:</p>
            </div>

            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Español</th>
                    <th>Inglés</th>
                  </tr>
                </thead>

                <tbody>
                  {conjugationRows.map(([spanish, english]) => (
                    <tr key={spanish}>
                      <td>{spanish}</td>
                      <td className={styles.englishCell}>{english}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p>
            ¿Puedes verlo? Lo complicado viene por el miedo a aprenderlo, por
            pensar que no eres lo suficientemente inteligente o capaz para
            aprender un idioma desde cero. Y por eso tengo dos cosas que
            decirte:
          </p>

          <p className={styles.emphasis}>
            SÍ eres lo suficientemente inteligente y capaz.
          </p>

          <p>
            <strong>NO lo estarías aprendiendo desde cero.</strong> El español y
            el inglés tienen un sinnúmero de similitudes,{' '}
            <strong>INCLUSO, en la pronunciación.</strong> Y es algo que podrás
            descubrir a lo largo de toda esta experiencia de aprendizaje.
          </p>

          <p>
            Mi amor por enseñar viene precisamente de eso: de demostrar que
            aprender un idioma nuevo no está fuera de tus posibilidades. Nace
            de querer ayudar a la gran comunidad de dominicanos e
            hispanohablantes a aprender algo que muchas veces creyeron
            imposible, de hacerlo de una manera fácil, intuitiva, con
            herramientas prácticas y pedagógicas que solamente sumarán a tu
            aprendizaje y harán de él una experiencia gratificante.
          </p>

          <p className={styles.emphasis}>
            ¡Acompáñame en este gran viaje que es el aprendizaje y permíteme
            demostrarte de lo que eres capaz!
          </p>

          <p className={styles.closing}>
            No enseñarte a memorizar inglés.
            <br />
            Enseñarte a entenderlo.
          </p>
        </div>

        <div className={styles.quote}>
          <h3>
            &ldquo;No te enseño inglés como si empezaras desde cero.
            <br />
            Te lo enseño a partir de algo que ya conoces perfectamente:
            <span> el español.</span>&rdquo;
          </h3>
        </div>
      </div>
    </section>
  );
}