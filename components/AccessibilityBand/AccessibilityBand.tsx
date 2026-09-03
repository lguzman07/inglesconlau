const badges = [
  'Contraste AA verificado',
  'Respeta «reducir movimiento»',
  'Sin rachas ni rankings',
];

export default function AccessibilityBand() {
  return (
    <section className="section accessibility-band">
      <div className="container">
        <div className="section-grid">
          <div className="section-content">
            <p className="section-eyebrow">Diseño inclusivo</p>

            <h2 className="section-title">
              Cuando eliminamos barreras, más personas tienen la oportunidad
              de aprender.
            </h2>

            <p>
              Alto contraste real, tipografía diseñada para la legibilidad,
              sin cronómetros ni rachas que perder, y respeto por quien
              prefiere menos movimiento en pantalla.
            </p>
          </div>

          <ul className="accessibility-badges">
            {badges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
