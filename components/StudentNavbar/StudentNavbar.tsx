'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import ThemeControls from '@/components/ThemeControls/ThemeControls';
import styles from './StudentNavbar.module.css';

const DEVICE_ID_STORAGE_KEY = 'ingles-con-lau-device-id';

const navigationItems = [
  { href: '/inicio', label: 'Inicio' },
  { href: '/lecciones', label: 'Lecciones' },
  { href: '/configuracion', label: 'Configuración' },
];

export default function StudentNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const isStudentArea =
    pathname === '/inicio' ||
    pathname.startsWith('/lecciones') ||
    pathname.startsWith('/configuracion');

  if (!isStudentArea) {
    return null;
  }

  async function handleLogout() {
    setIsLoggingOut(true);

    const supabase = createClient();

    const deviceId = window.localStorage.getItem(
      DEVICE_ID_STORAGE_KEY,
    );

    if (deviceId) {
      const { error: deviceError } = await supabase.rpc(
        'deactivate_current_device',
        {
          p_device_id: deviceId,
        },
      );

      if (deviceError) {
        console.error(
          'Error deactivating device:',
          deviceError.message,
        );
      }
    }

    await supabase.auth.signOut();

    router.replace('/');
    router.refresh();
  }

  return (
    <header className={styles.navbar}>
      <Link href="/inicio" className={styles.logo}>
        Inglés con Lau
      </Link>

      <nav
        className={styles.navigation}
        aria-label="Navegación principal"
      >
        {navigationItems.map((item) => {
          const isActive =
            item.href === '/lecciones'
              ? pathname.startsWith('/lecciones')
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive ? styles.activeLink : styles.navLink
              }
            >
              {item.label}
            </Link>
          );
        })}

        {!pathname.startsWith('/configuracion') && (
          <ThemeControls />
        )}

        <button
          type="button"
          className={styles.logoutButton}
          onClick={handleLogout}
          disabled={isLoggingOut}
        >
          {isLoggingOut
            ? 'Cerrando sesión...'
            : 'Cerrar sesión'}
        </button>
      </nav>
    </header>
  );
}