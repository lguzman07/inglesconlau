'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '@/app/assets/logo-transparent.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="nav-header">
        <Link
          className="nav-brand"
          href="/"
          aria-label="Ir al inicio"
          onClick={closeMenu}
        >
          <Image
            src={logo}
            alt="Logo de Inglés con Lau"
            className="nav-logo"
            priority
          />

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

      <div
        id="navigation-menu"
        className={`nav-right ${isMenuOpen ? 'nav-right-open' : ''}`}
      >
        <div className="nav-links">
          <a href="#methodology" onClick={closeMenu}>
            Metodología
          </a>

          <a href="#why" onClick={closeMenu}>
            ¿Por qué nosotros?
          </a>

          <a href="#roadmap" onClick={closeMenu}>
            Roadmap
          </a>

          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>
        </div>

        <div className="nav-auth">
          <Link
            className="nav-login-button"
            href="/iniciar-sesion"
            onClick={closeMenu}
          >
            Iniciar sesión
          </Link>

          <Link
            className="nav-register-button"
            href="/registro"
            onClick={closeMenu}
          >
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
}