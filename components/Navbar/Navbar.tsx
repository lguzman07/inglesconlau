'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import logo from '@/app/assets/logo-transparent.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sectionIds = ['methodology', 'historia', 'why', 'faq'];

    function updateActiveSection() {
      const currentPosition = window.scrollY + 220;
      let currentSection = '';

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section && section.offsetTop <= currentPosition) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    }

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  function closeMenu() { setIsMenuOpen(false); }

  return (
    <nav className="navbar">
      <div className="nav-header">
        <Link className="nav-brand" href="/" aria-label="Ir al inicio" onClick={closeMenu}>
          <Image src={logo} alt="Logo de Inglés con Lau" className="nav-logo" priority />
          <span>Inglés con Lau</span>
        </Link>
        <button
          type="button"
          className="nav-menu-button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="navigation-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span aria-hidden="true">{isMenuOpen ? '×' : '☰'}</span>
        </button>
      </div>

      <div id="navigation-menu" className={`nav-right ${isMenuOpen ? 'nav-right-open' : ''}`}>
        <div className="nav-links">
          <a
            href="#methodology"
            className={activeSection === 'methodology' ? 'active' : ''}
            aria-current={activeSection === 'methodology' ? 'location' : undefined}
            onClick={closeMenu}
          >
            Metodología
          </a>
          <a
            href="#historia"
            className={activeSection === 'historia' ? 'active' : ''}
            aria-current={activeSection === 'historia' ? 'location' : undefined}
            onClick={closeMenu}
          >
            Mi historia
          </a>
          <a
            href="#why"
            className={activeSection === 'why' ? 'active' : ''}
            aria-current={activeSection === 'why' ? 'location' : undefined}
            onClick={closeMenu}
          >
            Cómo aprendes
          </a>
          <a
            href="#faq"
            className={activeSection === 'faq' ? 'active' : ''}
            aria-current={activeSection === 'faq' ? 'location' : undefined}
            onClick={closeMenu}
          >
            Preguntas
          </a>
        </div>

        <div className="nav-auth">
          <Link className="nav-login-button" href="/iniciar-sesion" onClick={closeMenu}>
            Iniciar sesión
          </Link>
          <Link className="nav-register-button" href="/plan" onClick={closeMenu}>
            Ver los planes
          </Link>
        </div>
      </div>
    </nav>
  );
}
