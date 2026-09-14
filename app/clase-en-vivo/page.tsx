import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';
import WherebyRoom from '@/components/WherebyRoom/WherebyRoom';

import styles from './ClaseEnVivo.module.css';

export const metadata: Metadata = {
  title: 'Clase en vivo | Inglés con Lau',
  description: 'Únete a tu clase en vivo sin salir de la plataforma.',
};

type LiveClassRoom = {
  is_open: boolean;
  whereby_room_url: string | null;
  whereby_host_room_url?: string | null;
};

export default async function ClaseEnVivoPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/iniciar-sesion?next=%2Fclase-en-vivo');

  const [profileResult, accessResult] = await Promise.all([
    supabase.from('profiles').select('role').eq('id', user.id).maybeSingle(),
    supabase.rpc('student_has_access'),
  ]);

  const isAdmin = profileResult.data?.role === 'admin';
  const hasAccess = isAdmin || accessResult.data === true;

  if (!hasAccess) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <Link href="/inicio" className={styles.backLink}>← Volver al inicio</Link>
          <div className={styles.stateCard}>
            <p className={styles.eyebrow}>CLASE EN VIVO</p>
            <h1>Necesitas una suscripción activa</h1>
            <p>Activa tu suscripción para acceder a la clase en vivo.</p>
            <Link href="/plan" className={styles.primaryLink}>Ver planes →</Link>
          </div>
        </div>
      </main>
    );
  }

  const settingsResult = isAdmin
    ? await supabase.rpc('admin_get_live_class_room')
    : await supabase.rpc('get_live_class_room');

  const settings = (settingsResult.data?.[0] ?? null) as LiveClassRoom | null;

  if (settingsResult.error || !settings?.is_open) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <Link href="/inicio" className={styles.backLink}>← Volver al inicio</Link>
          <div className={styles.stateCard}>
            <p className={styles.eyebrow}>CLASE EN VIVO</p>
            <h1>No hay clase en vivo ahora</h1>
            <p>Revisa el calendario para ver cuándo es tu próxima clase.</p>
            <Link href="/calendario" className={styles.primaryLink}>Ver calendario →</Link>
          </div>
        </div>
      </main>
    );
  }

  const roomUrl = isAdmin
    ? settings.whereby_host_room_url || settings.whereby_room_url
    : settings.whereby_room_url;

  if (!roomUrl) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <Link href="/inicio" className={styles.backLink}>← Volver al inicio</Link>
          <div className={styles.stateCard}>
            <p className={styles.eyebrow}>CLASE EN VIVO</p>
            <h1>El salón todavía no está configurado</h1>
            <p>
              {isAdmin
                ? 'Agrega el link del salón de Whereby en /admin/en-vivo.'
                : 'Vuelve a intentarlo en unos minutos.'}
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/inicio" className={styles.backLink}>← Volver al inicio</Link>

        <div className={styles.helpTip}>
          <p>
            <strong>¿No te reconoce la cámara o el micrófono?</strong>
          </p>

          <ul className={styles.helpTipList}>
            <li>
              Cuando cargue la página, tu navegador te va a preguntar si
              puede usarlos — dale &ldquo;Permitir&rdquo;.
            </li>

            <li>
              <strong>¿Ves una X roja sobre el ícono del micrófono o la
              cámara?</strong> Eso quiere decir que los bloqueaste sin
              querer antes. Para arreglarlo: toca el candado 🔒 (o el
              ícono de información ⓘ) justo a la izquierda de la
              dirección de la página, arriba del navegador. Busca
              &ldquo;Micrófono&rdquo; y &ldquo;Cámara&rdquo; y cambia
              ambos a &ldquo;Permitir&rdquo;. Luego recarga la página.
            </li>

            <li>
              Si ya los permitiste en el navegador y sigue con la X
              roja, revisa la configuración de privacidad de tu
              computadora (esto bloquea el micrófono para todas las
              apps, aunque el navegador tenga permiso):
              <br />
              <strong>En Windows:</strong> Inicio → Configuración →
              Privacidad y seguridad → Micrófono (y Cámara) →
              asegúrate de que &ldquo;Acceso al micrófono&rdquo; esté
              activado, y que tu navegador aparezca permitido en la
              lista.
              <br />
              <strong>En Mac:</strong> Preferencias del Sistema →
              Privacidad y seguridad → Micrófono (y Cámara) → activa
              la casilla de tu navegador.
              <br />
              Después de cambiarlo, cierra el navegador por completo y
              vuelve a abrirlo.
            </li>

            <li>
              Si ya los permitiste y sigue sin funcionar, cierra otras
              apps que puedan estar usando la cámara o el micrófono
              (Zoom, Teams, etc.) y recarga la página.
            </li>
          </ul>
        </div>

        <section className={styles.videoPane} aria-label="Video de la clase">
          <WherebyRoom roomUrl={roomUrl} displayName={user.email ?? undefined} />
        </section>
      </div>
    </main>
  );
}
