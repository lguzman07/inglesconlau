'use client';

import { useState } from 'react';

const faqs = [
  { question: '¿Para quién está diseñado Inglés con Lau?', answer: 'He diseñado Inglés con Lau para personas que quieren aprender inglés de una manera clara, práctica y sin miedo a equivocarse. No importa si estás comenzando desde cero o si ya has estudiado antes, pero todavía no te sientes seguro al hablar o no sabes cómo continuar aprendiendo.' },
  { question: '¿Necesito tener conocimientos previos de inglés?', answer: 'No. Puedes comenzar desde cero, porque parto completamente del español y no espero que tengas conocimientos previos de inglés. Si ya sabes un poco, también podrás comenzar desde el nivel que te corresponda.' },
  { question: '¿Qué incluye la suscripción?', answer: 'Con tu suscripción tendrás acceso a lecciones grabadas en video, ejercicios interactivos, visualización de tu progreso, una ruta de aprendizaje y el club de lectura.' },
  { question: '¿Las clases son en vivo, grabadas o ambas?', answer: 'Las lecciones son grabadas para que puedas verlas cuando quieras, repetir mis explicaciones y estudiar a tu propio ritmo. También tendrás acceso al club de lectura, donde practicaremos pronunciación y aprenderemos vocabulario, aunque no funciona como una clase en vivo.' },
  { question: '¿Puedo estudiar a mi propio ritmo?', answer: 'Sí. Puedes estudiar en el horario que más te convenga, repetir mis explicaciones y realizar los ejercicios todas las veces que necesites. No tienes que avanzar al mismo ritmo que los demás.' },
  { question: '¿Cómo sabré qué lección estudiar y en qué orden?', answer: 'Te proporcionaré una ruta de aprendizaje que te indicará paso a paso qué lección debes completar y cuál continúa después. Así no tendrás que adivinar qué estudiar ni sentirte perdido dentro de la plataforma.' },
  { question: '¿Cuánto cuesta la suscripción y puedo cancelarla cuando quiera?', answer: 'La suscripción cuesta RD$1,200 al mes. Puedes cancelarla cuando quieras, sin contratos ni compromisos de permanencia.' },
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
          <h2 className="section-title">¿Tienes alguna pregunta?</h2>
          <p className="faq-intro">
            Aquí encontrarás las respuestas a las preguntas más comunes sobre
            Inglés con Lau.
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
