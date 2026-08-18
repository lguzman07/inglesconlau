'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import ThemeControls from '@/components/ThemeControls/ThemeControls';
import styles from './StudentNavbar.module.css';

const navigationItems = [
  { href: '/inicio', label: 'Inicio' },
  { href: '/lecciones', label: 'Lecciones' },
  { href: '/completar-perfil', label: 'Mi perfil' },
];

export default function StudentNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const isStudentArea =
    pathname === '/inicio' || pathname.startsWith('/lecciones');

  if (!isStudentArea) {
    return null;
  }

  async function handleLogout() {
    setIsLoggingOut(true);

    const supabase = createClient();
    await supabase.auth.signOut();

    router.replace('/');
    router.refresh();
  }

  return (
    <header className={styles.navbar}>
      <Link href="/inicio" className={styles.logo}>
        Inglés con Lau
      </Link>

      <nav className={styles.navigation} aria-label="Navegación principal">
        {navigationItems.map((item) => {
          const isActive =
            item.href === '/lecciones'
              ? pathname.startsWith('/lecciones')
              : pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={isActive ? styles.activeLink : styles.navLink}
            >
              {item.label}
            </Link>
          );
        })}

        <ThemeControls />

        <button
          type="button"
          className={styles.logoutButton}
          onClick={handleLogout}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? 'Cerrando sesión...' : 'Cerrar sesión'}
        </button>
      </nav>
    </header>
  );
}
