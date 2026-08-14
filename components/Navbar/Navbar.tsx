'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import logo from '@/app/assets/logo-transparent.png';
import ThemeControls from '@/components/ThemeControls/ThemeControls';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sectionIds = ['methodology', 'why', 'roadmap', 'faq'];

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
          <span>Inglés Con Lau</span>
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
            href="#why"
            className={activeSection === 'why' ? 'active' : ''}
            aria-current={activeSection === 'why' ? 'location' : undefined}
            onClick={closeMenu}
          >
            ¿Por qué nosotros?
          </a>
          <a
            href="#roadmap"
            className={activeSection === 'roadmap' ? 'active' : ''}
            aria-current={activeSection === 'roadmap' ? 'location' : undefined}
            onClick={closeMenu}
          >
            Roadmap
          </a>
          <a
            href="#faq"
            className={activeSection === 'faq' ? 'active' : ''}
            aria-current={activeSection === 'faq' ? 'location' : undefined}
            onClick={closeMenu}
          >
            FAQ
          </a>
        </div>

        <ThemeControls />

        <div className="nav-auth">
          <Link className="nav-login-button" href="/iniciar-sesion" onClick={closeMenu}>
            Iniciar sesión
          </Link>
          <Link className="nav-register-button" href="/registro" onClick={closeMenu}>
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
}
