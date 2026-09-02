'use client';

import { useEffect, useState } from 'react';

import styles from './WherebyRoom.module.css';

export default function WherebyRoom({
  roomUrl,
  displayName,
}: {
  roomUrl: string;
  displayName?: string;
}) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    import('@whereby.com/browser-sdk/embed').then(() => {
      if (isMounted) setIsReady(true);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!isReady) {
    return (
      <div className={styles.loading}>
        <p>Cargando la sala de video…</p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <whereby-embed
        room={roomUrl}
        displayName={displayName}
        chat="on"
        people="on"
        background="off"
        leaveButton="off"
        style={{ width: '100%', height: '100%', border: '0', display: 'block' }}
      />
    </div>
  );
}
