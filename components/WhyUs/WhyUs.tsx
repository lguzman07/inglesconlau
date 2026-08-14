'use client';

import { useEffect, useRef, useState } from 'react';

const cards = [
  { icon: '🌎', title: 'Metodología diseñada por y para hispanohablantes', description: 'Este es un espacio diseñado específicamente para hispanohablantes, donde se explican los conceptos a partir de tu lengua materna, pensando en las posibles preguntas o dificultades que puedas tener.' },
  { icon: '🛣️', title: 'Aprende a tu ritmo', description: 'Te ofrecemos un camino estructurado y un orden sugerido, pero tú decides qué aprender y cuándo hacerlo. No hay lecciones bloqueadas, vidas que perder ni rankings que alcanzar. Puedes repetir o saltar lecciones y avanzar con calma, compitiendo solamente contigo mismo.' },
  { icon: '🧠', title: 'Te enseño inglés, no a usar una plataforma confusa', description: 'La plataforma es intuitiva y fácil de usar. Accede a todas las reuniones bajo un mismo enlace. Cada lección tiene su respectivo video explicativo. Las lecciones son cortas, con botones grandes y explicaciones incluidas en la sección de cada ejercicio.' },
  { icon: '💬', title: 'Asistencia en español al correo electrónico', description: 'De tener preguntas sobre las lecciones, puedes escribirnos al correo lau@inglesconlau.com y recibirás asistencia en español. No necesitas saber inglés para recibir ayuda.' },
  { icon: '🌱', title: 'Educación accesible y de calidad', description: 'Aprender inglés puede proveer grandes oportunidades laborales, académicas y de crecimiento personal. Considero mi deber moral hacer de la educación de calidad un derecho accesible y duradero.' },
  { icon: '🚪', title: 'Aprendizaje para todos', description: 'La inclusividad de distintos tipos de aprendizaje fue pensada desde el inicio del proyecto como parte esencial del diseño. He diseñado la plataforma pensando en personas con dislexia, TDAH, autismo (TEA) y/o sensibilidad sensorial. Porque cuando eliminamos barreras, más personas tienen la oportunidad de aprender.' },
];

export default function WhyDifferent() {
  const [activeCard, setActiveCard] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  function moveToCard(index: number) {
    const nextIndex = Math.max(0, Math.min(index, cards.length - 1));
    cardRefs.current[nextIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    setActiveCard(nextIndex);
  }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animationFrame = 0;

    function updateActiveCard() {
      const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(trackCenter - (rect.left + rect.width / 2));
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveCard(closestIndex);
      animationFrame = 0;
    }

    function handleScroll() {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateActiveCard);
    }

    updateActiveCard();
    track.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      track.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section id="why" className="section section-soft">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">¿POR QUÉ INGLÉS CON LAU?</p>
          <h2 className="section-title">Una forma diferente de aprender inglés.</h2>
        </div>

        <div className="features-carousel-wrapper">
          <button type="button" className="carousel-arrow carousel-arrow-left" aria-label="Ver beneficio anterior" disabled={activeCard === 0} onClick={() => moveToCard(activeCard - 1)}>←</button>

          <div className="features-carousel" ref={trackRef} role="region" aria-label="Beneficios de Inglés con Lau">
            {cards.map((card, index) => (
              <div
                className={`feature-card carousel-card ${activeCard === index ? 'carousel-card-active' : ''}`}
                key={card.title}
                ref={(element) => { cardRefs.current[index] = element; }}
                onClick={() => moveToCard(index)}
              >
                <div className="feature-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>

          <button type="button" className="carousel-arrow carousel-arrow-right" aria-label="Ver siguiente beneficio" disabled={activeCard === cards.length - 1} onClick={() => moveToCard(activeCard + 1)}>→</button>
        </div>

        <div className="carousel-dots" aria-label="Seleccionar beneficio">
          {cards.map((card, index) => (
            <button type="button" className={activeCard === index ? 'active' : ''} aria-label={`Ver ${card.title}`} aria-current={activeCard === index ? 'true' : undefined} key={card.title} onClick={() => moveToCard(index)} />
          ))}
        </div>
      </div>
    </section>
  );
}
