'use client';

import { useState } from 'react';

import { createClient } from '@/lib/supabase/client';

import styles from './page.module.css';

export type LiveClassRoom = {
  is_open: boolean;
  whereby_room_url: string | null;
  whereby_host_room_url: string | null;
};

export default function AdminLiveClassSettings({
  initialSettings,
}: {
  initialSettings: LiveClassRoom;
}) {
  const [isOpen, setIsOpen] = useState(initialSettings.is_open);
  const [wherebyRoomUrl, setWherebyRoomUrl] = useState(initialSettings.whereby_room_url ?? '');
  const [wherebyHostRoomUrl, setWherebyHostRoomUrl] = useState(
    initialSettings.whereby_host_room_url ?? '',
  );
  const [isSaving, setIsSaving] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(
    null,
  );

  async function handleSave(event: React.FormEvent) {
    event.preventDefault();
    setIsSaving(true);
    setFeedback(null);

    const supabase = createClient();
    const { error } = await supabase.rpc('admin_set_live_class_room', {
      p_is_open: isOpen,
      p_whereby_room_url: wherebyRoomUrl,
      p_whereby_host_room_url: wherebyHostRoomUrl,
    });

    if (error) {
      setFeedback({ type: 'error', message: error.message });
    } else {
      setFeedback({ type: 'success', message: 'Guardado.' });
    }

    setIsSaving(false);
  }

  return (
    <form className={styles.panel} onSubmit={handleSave}>
      <div className={styles.statusRow}>
        <div>
          <h2>Estado del salón</h2>
          <p>Mientras esté cerrado, los estudiantes verán un mensaje de &ldquo;no hay clase ahora&rdquo;.</p>
        </div>
        <button
          type="button"
          className={isOpen ? styles.statusButtonOpen : styles.statusButtonClosed}
          onClick={() => setIsOpen((previous) => !previous)}
        >
          {isOpen ? '🟢 Abierto' : '⚪ Cerrado'}
        </button>
      </div>

      <label className={styles.field}>
        <span>Link del salón de Whereby (el que ven tus estudiantes)</span>
        <input
          type="url"
          placeholder="https://tu-subdominio.whereby.com/tu-salon"
          value={wherebyRoomUrl}
          onChange={(event) => setWherebyRoomUrl(event.target.value)}
        />
      </label>

      <label className={styles.field}>
        <span>Link de host de Whereby (opcional — el que usas tú, con más controles)</span>
        <input
          type="url"
          placeholder="https://tu-subdominio.whereby.com/tu-salon?roomKey=..."
          value={wherebyHostRoomUrl}
          onChange={(event) => setWherebyHostRoomUrl(event.target.value)}
        />
      </label>

      {feedback ? (
        <div className={feedback.type === 'success' ? styles.inlineSuccess : styles.inlineError}>
          {feedback.message}
        </div>
      ) : null}

      <button type="submit" className={styles.saveButton} disabled={isSaving}>
        {isSaving ? 'Guardando…' : 'Guardar cambios'}
      </button>
    </form>
  );
}
