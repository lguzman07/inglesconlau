export default function WhyDifferent() {
  const cards = [
    {
      icon: '🧠',
      title: 'Aprende entendiendo',
      description:
        'No memorizas reglas sin propósito. Comprendes cómo funciona el inglés para usarlo con confianza.',
    },
    {
      icon: '🌎',
      title: 'Diseñado por y para hispanohablantes',
      description:
        'Cada lección está creada pensando en las dudas y dificultades que tenemos al aprender inglés partiendo del español.',
    },
    {
      icon: '💬',
      title: 'Habla desde la primera lección',
      description:
        'El objetivo no es completar ejercicios. Es que puedas comunicarte desde el primer día.',
    },
    {
      icon: '🌱',
      title: 'Confianza antes que perfección',
      description:
        'Cometer errores es parte del proceso. Primero desarrollamos confianza y después perfeccionamos el idioma.',
    },
    {
      icon: '🔗',
      title: 'Conecta con lo que ya sabes',
      description:
        'No empiezas desde cero. Construimos sobre conocimientos que ya tienes para aprender de forma más natural.',
    },
    {
      icon: '🎯',
      title: 'Cada lección tiene un propósito',
      description:
        'Todo sigue un camino claro para ayudarte a comunicarte paso a paso, sin sentirte perdido.',
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
