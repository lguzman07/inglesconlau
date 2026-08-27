'use client';

import { useState } from 'react';

const faqs = [
  { question: '¿Para quién está diseñado Inglés con Lau?', answer: 'He diseñado Inglés con Lau para personas que quieren aprender inglés de una manera clara, práctica y sin miedo a equivocarse. No importa si estás comenzando desde cero o si ya has estudiado antes, pero todavía no te sientes seguro al hablar o no sabes cómo continuar aprendiendo.' },
  { question: '¿Necesito tener conocimientos previos de inglés?', answer: 'No. Puedes comenzar desde cero, porque parto completamente del español y no espero que tengas conocimientos previos de inglés. Si ya sabes un poco, también podrás comenzar en el nivel que te corresponda: A1, A2, B1 o B2.' },
  { question: '¿Las clases son en vivo o grabadas?', answer: 'Son clases en vivo, por videollamada, en grupos pequeños de hasta 10 personas, de lunes a viernes a tu misma hora. Muy pronto tendremos también una plataforma de lecciones grabadas para practicar entre clases.' },
  { question: '¿Cómo elijo mi horario?', answer: 'Eliges tu nivel y tu horario una sola vez al comprar tu paquete. Ese es tu grupo fijo, a la misma hora, los días que dure tu paquete: no tienes que reservar clase por clase.' },
  { question: '¿Cómo pago desde fuera de República Dominicana?', answer: 'Por ahora, escríbeme por WhatsApp al 809-650-4884 y coordinamos el pago desde tu país. Estoy trabajando en aceptar tarjetas internacionales directamente desde la página muy pronto.' },
  { question: '¿Cuánto cuestan los paquetes y puedo cancelarlos cuando quiera?', answer: 'Los paquetes van desde RD$100 la clase de prueba hasta RD$7,000 el curso completo de 80 clases. No hay suscripción ni renovación automática: compras el paquete que quieras y usas tus clases dentro del período que corresponde.' },
  { question: '¿Puedo cambiar de nivel más adelante?', answer: 'Sí. Si sientes que el grupo te queda corto o quieres reforzar, escríbeme y te ayudo a cambiar de nivel para tu próximo paquete.' },
  { question: '¿Puedo utilizar la plataforma desde el celular, la tableta y la computadora?', answer: 'Sí. He diseñado la plataforma para que puedas utilizarla desde el celular, la tableta o la computadora, sin necesidad de descargar una aplicación.' },
  { question: '¿Qué hago si tengo dudas sobre una lección o un ejercicio?', answer: '', includesEmail: true },
  { question: '¿Qué hace diferente a Inglés con Lau de otras plataformas?', answer: 'Mi compromiso con la accesibilidad va más allá de ofrecer educación a un precio accesible. También quiero que la plataforma sea fácil de leer y utilizar, por eso incluye una tipografía clara y diferentes modos de visualización para que elijas el que te resulte más cómodo. Además, parto completamente del español y no espero que ya sepas inglés. Soy una profesora dominicana que conoce de primera mano los retos de aprender este idioma y lo difícil que puede ser dominar su pronunciación.' },
  { question: '¿No sería mejor aprender inglés con un profesor nativo?', answer: 'Depende de tu nivel y de lo que quieras lograr. Si tienes un nivel avanzado y solo quieres practicar conversación, un profesor nativo que no hable español puede ser tu mejor opción, porque te verás obligado a comunicarte siempre en inglés. Sin embargo, he creado Inglés con Lau para todo tipo de estudiantes. La ventaja de aprender conmigo es que conozco tanto el idioma que quieres aprender como tu idioma natal. Esto me permite comprender por qué cometes ciertos errores, explicarte los conceptos partiendo del español y ayudarte con las dificultades de pronunciación que suelen tener los hispanohablantes.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">PREGUNTAS FRECUENTES</p>
          <h2 className="section-title">Todo lo que necesitas saber.</h2>
          <p className="faq-intro">
            ¿No está aquí? Escríbeme por WhatsApp al 809-650-4884.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div className={`faq-item ${isOpen ? 'faq-item-open' : ''}`} key={faq.question}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>

                <div className="faq-answer-wrapper" id={answerId} aria-hidden={!isOpen}>
                  <div className="faq-answer">
                    {faq.includesEmail ? (
                      <p>
                        Puedes escribirme a{' '}
                        <a href="mailto:lau@inglesconlau.com">lau@inglesconlau.com</a>{' '}
                        y te ayudaré con tus dudas sobre las lecciones o los ejercicios. Aunque estudies a tu propio ritmo, no quiero que sientas que estás aprendiendo completamente solo.
                      </p>
                    ) : (
                      <p>{faq.answer}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
