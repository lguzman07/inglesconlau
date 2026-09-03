const cards = [
  {
    icon: '🌎',
    title: 'Diseñada por y para hispanohablantes',
    description:
      'Los conceptos se explican desde tu lengua materna, anticipando las preguntas que de verdad vas a tener.',
  },
  {
    icon: '📈',
    title: 'Un horario fijo, no una agenda que gestionar',
    description:
      'Eliges tu grupo y tu hora una sola vez. Sabes exactamente cuándo es tu clase cada día.',
  },
  {
    icon: '💻',
    title: 'Te enseño inglés, no a usar una plataforma confusa',
    description:
      'Todas las clases entran por el mismo enlace. Botones grandes, nada que descifrar.',
  },
  {
    icon: '💬',
    title: 'Asistencia en español',
    description:
      'Escribes a lau@inglesconlau.com y te responden en español. No necesitas saber inglés para pedir ayuda.',
  },
  {
    icon: '⭐',
    title: 'Educación accesible y de calidad',
    description:
      'El inglés abre puertas laborales y académicas. Que sea de calidad no debería significar que sea caro.',
  },
  {
    icon: '❤️',
    title: 'Aprendizaje para todos',
    description:
      'Pensada desde el inicio para dislexia, TDAH, autismo y sensibilidad sensorial. No fue un añadido: fue parte del diseño.',
  },
];

export default function WhyDifferent() {
  return (
    <section id="why" className="section section-soft">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">¿POR QUÉ INGLÉS CON LAU?</p>
          <h2 className="section-title">Una forma diferente de aprender inglés.</h2>
        </div>

        <div className="features-grid">
          {cards.map((card) => (
            <div className="feature-card" key={card.title}>
              <div className="feature-icon" aria-hidden="true">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
