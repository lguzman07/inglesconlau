export default function WhyDifferent() {
  const cards = [

    {
      icon: '🚪',
      title: 'Compromiso con la accesibilidad',
      description:
        'La inclusividad de tipos de aprendizaje fue pensada desde el inicio del proyecto como parte esencial del diseño, no para cumplir con un requisito. He diseñado la plataforma pensada para personas con dislexia, TDAH, autismo (TEA) y/o sensibilidad sensorial. Porque cuando eliminamos barreras, más personas tienen la oportunidad de aprender.',
    },


    {
      icon: '🌎',
      title: 'Metodología diseñada por y para hispanohablantes',
      description:
        'Aprender inglés debe ser una experiencia gratificante; no frustrante. En ocasiones, se espera que conozcas el idioma incluso antes de empezar a hablarlo. Es por eso que he diseñado un espacio específicamente para hispanohablantes, donde se explican los conceptos a partir de tu lengua materna, pensando en las posibles preguntas o dificultades que puedas tener.', 
      },

          {
      icon: '🌱',
      title: 'Aprendizaje pausado',
      description:
        'No hay niveles que desbloquear, vidas que perder, ni rankings que alcanzar. Nuestra filosofía se basa en aprender de una manera calmada, a tu ritmo, y compitiendo solamente contigo mismo.',
    },
        {
      icon: '🛣️',
      title: 'Las rutas son una guía, no un camino obligatorio',
      description:
        'Te presentamos un camino estructurado, un orden sugerido, pero tú puedes aprender lo que quieras, cuando quieras.',
    },
    {
      icon: '💬',
      title: 'Aprende solo, practica con otros',
      description:
        'La idea es la siguiente: aprendes a tu ritmo, y practicas con personas que tienen la misma meta que tú: hablar inglés. No hay presión, competencia, ni obligación de participar. Todas las prácticas son guiadas y supervisadas por mí, para que puedas aprender de una manera segura y efectiva.',
    },


        {
      icon: '🧠', 
      title: 'Te enseño inglés, no a usar una plataforma confusa',
      description:
        'He diseñado una plataforma intuitiva y fácil de usar. Accede a todas las reuniones bajo un mismo enlace. Cada lección en PDF viene con su hoja de respuestas incluida.Las lecciones son cortas, con botones grandes, y explicaciones incluidas en la sección de cada ejercicio. Concéntrate en aprender inglés, no en cómo usar la plataforma.',
    },

  ];

  return (
    <section id="why" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">¿POR QUÉ ENGLISH WITH LAU?</p>

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
