const outcomes = [
  {
    title: 'Saludar de forma natural',
    description: 'Desde la primera clase, no después de cien palabras.',
  },
  {
    title: 'Presentarte con confianza',
    description: 'Quién eres, qué haces, de dónde vienes.',
  },
  {
    title: 'Construir oraciones sencillas',
    description: 'Con reglas que se explican en español.',
  },
  {
    title: 'Hablar sin miedo a equivocarte',
    description: 'Grupos pequeños donde equivocarse es parte del método.',
  },
];

export default function LearningOutcomes() {
  return (
    <div className="learning-outcomes">
      <div className="learning-outcomes-grid">
        {outcomes.map((outcome) => (
          <div className="learning-outcome" key={outcome.title}>
            <h3>{outcome.title}</h3>
            <p>{outcome.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
