export default function WhyDifferent() {
  const cards = [
    {
      icon: '🌎',
      title: 'Metodología diseñada por y para hispanohablantes',
      description:
        'Este es un espacio diseñado específicamente para hispanohablantes, donde se explican los conceptos a partir de tu lengua materna, pensando en las posibles preguntas o dificultades que puedas tener.',
    },
    {
      icon: '🛣️',
      title: 'Aprende a tu ritmo',
      description:
        'Te ofrecemos un camino estructurado y un orden sugerido, pero tú decides qué aprender y cuándo hacerlo. No hay lecciones bloqueadas, vidas que perder ni rankings que alcanzar. Puedes repetir o saltar lecciones y avanzar con calma, compitiendo solamente contigo mismo.',
    },
    {
      icon: '🧠',
      title: 'Te enseño inglés, no a usar una plataforma confusa',
      description:
        'La plataforma es intuitiva y fácil de usar. Accede a todas las reuniones bajo un mismo enlace. Cada lección tiene su respectivo video explicativo. Las lecciones son cortas, con botones grandes y explicaciones incluidas en la sección de cada ejercicio.',
    },
    {
      icon: '💬',
      title: 'Asistencia en español al correo electrónico',
      description:
        'De tener preguntas sobre las lecciones, puedes escribirnos al correo lau@inglesconlau.com y recibirás asistencia en español. No necesitas saber inglés para recibir ayuda.',
    },
    {
      icon: '🌱',
      title: 'Educación accesible y de calidad',
      description:
        'Aprender inglés puede proveer grandes oportunidades laborales, académicas y de crecimiento personal. Considero mi deber moral hacer de la educación de calidad un derecho accesible y duradero.',
    },
    {
      icon: '🚪',
      title: 'Aprendizaje para todos',
      description:
        'La inclusividad de distintos tipos de aprendizaje fue pensada desde el inicio del proyecto como parte esencial del diseño. He diseñado la plataforma pensando en personas con dislexia, TDAH, autismo (TEA) y/o sensibilidad sensorial. Porque cuando eliminamos barreras, más personas tienen la oportunidad de aprender.',
    },
  ];

  return (
    <section id="why" className="section section-soft">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">¿POR QUÉ INGLÉS CON LAU?</p>

          <h2 className="section-title">
            Una forma diferente de aprender inglés.
          </h2>
        </div>

        <div className="features-grid">
          {cards.map((card) => (
            <div className="feature-card" key={card.title}>
              <div className="feature-icon">{card.icon}</div>

              <h3>{card.title}</h3>

              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
