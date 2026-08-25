'use client';

import { useMemo, useState } from 'react';

import { createClient } from '@/lib/supabase/client';

import styles from './page.module.css';

export type AdminStudent = {
  user_id: string;
  email: string;
  full_name: string;
  english_level: string;
  available_classes: number;
  total_purchased: number;
  joined_at: string;
};

type AdminStudentsProps = {
  initialStudents: AdminStudent[];
};

type Notice = {
  type: 'success' | 'error';
  text: string;
} | null;

const purchasePackages = [5, 20, 80] as const;

export default function AdminStudents({
  initialStudents,
}: AdminStudentsProps) {
  const supabase = useMemo(() => createClient(), []);
  const [students, setStudents] =
    useState(initialStudents);
  const [search, setSearch] = useState('');
  const [draftBalances, setDraftBalances] = useState<
    Record<string, string>
  >(() =>
    Object.fromEntries(
      initialStudents.map((student) => [
        student.user_id,
        String(student.available_classes),
      ]),
    ),
  );
  const [savingId, setSavingId] = useState<string | null>(
    null,
  );
  const [purchasingId, setPurchasingId] = useState<
    string | null
  >(null);
  const [notice, setNotice] = useState<Notice>(null);

  const filteredStudents = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return students;
    }

    return students.filter((student) =>
      [
        student.full_name,
        student.email,
        student.english_level,
      ].some((value) => value.toLowerCase().includes(query)),
    );
  }, [search, students]);

  async function saveBalance(student: AdminStudent) {
    const rawValue = draftBalances[student.user_id];
    const newBalance = Number(rawValue);

    if (
      !Number.isInteger(newBalance) ||
      newBalance < 0 ||
      newBalance > 10000
    ) {
      setNotice({
        type: 'error',
        text: 'Escribe una cantidad entera entre 0 y 10,000.',
      });
      return;
    }

    setSavingId(student.user_id);
    setNotice(null);

    const { error } = await supabase.rpc(
      'admin_set_class_balance',
      {
        p_user_id: student.user_id,
        p_available_classes: newBalance,
      },
    );

    if (error) {
      setNotice({
        type: 'error',
        text:
          error.message ||
          'No pudimos actualizar los cupos.',
      });
      setSavingId(null);
      return;
    }

    setStudents((currentStudents) =>
      currentStudents.map((currentStudent) =>
        currentStudent.user_id === student.user_id
          ? {
              ...currentStudent,
              available_classes: newBalance,
            }
          : currentStudent,
      ),
    );
    setNotice({
      type: 'success',
      text: `Ahora ${student.full_name} tiene ${newBalance} clases disponibles.`,
    });
    setSavingId(null);
  }

  async function confirmPurchase(
    student: AdminStudent,
    classes: (typeof purchasePackages)[number],
  ) {
    setPurchasingId(student.user_id);
    setNotice(null);

    const { data, error } = await supabase.rpc(
      'admin_confirm_class_purchase',
      {
        p_user_id: student.user_id,
        p_classes: classes,
      },
    );

    if (error) {
      setNotice({
        type: 'error',
        text:
          error.message ||
          'No pudimos confirmar la compra.',
      });
      setPurchasingId(null);
      return;
    }

    const updatedBalance = Array.isArray(data)
      ? data[0]
      : data;
    const availableClasses = Number(
      updatedBalance?.available_classes ??
        student.available_classes + classes,
    );
    const totalPurchased = Number(
      updatedBalance?.total_purchased ??
        student.total_purchased + classes,
    );

    setStudents((currentStudents) =>
      currentStudents.map((currentStudent) =>
        currentStudent.user_id === student.user_id
          ? {
              ...currentStudent,
              available_classes: availableClasses,
              total_purchased: totalPurchased,
            }
          : currentStudent,
      ),
    );
    setDraftBalances((current) => ({
      ...current,
      [student.user_id]: String(availableClasses),
    }));
    setNotice({
      type: 'success',
      text: `Compra de ${classes} clases confirmada para ${student.full_name}.`,
    });
    setPurchasingId(null);
  }

  return (
    <section className={styles.panel}>
      <div className={styles.toolbar}>
        <div>
          <h2>Estudiantes</h2>
          <p>
            {students.length}{' '}
            {students.length === 1
              ? 'cuenta registrada'
              : 'cuentas registradas'}
          </p>
        </div>

        <label className={styles.searchField}>
          <span>Buscar</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Nombre, correo o nivel"
          />
        </label>
      </div>

      {notice ? (
        <div
          className={
            notice.type === 'success'
              ? styles.successNotice
              : styles.errorNotice
          }
          role={notice.type === 'error' ? 'alert' : 'status'}
        >
          {notice.text}
        </div>
      ) : null}

      {filteredStudents.length === 0 ? (
        <div className={styles.emptyState}>
          No encontramos estudiantes con esa búsqueda.
        </div>
      ) : (
        <div className={styles.studentGrid}>
          {filteredStudents.map((student) => (
            <article
              key={student.user_id}
              className={styles.studentCard}
            >
              <div className={styles.studentHeading}>
                <div>
                  <h3>{student.full_name}</h3>
                  <a href={`mailto:${student.email}`}>
                    {student.email}
                  </a>
                </div>
                <span className={styles.levelBadge}>
                  {student.english_level}
                </span>
              </div>

              <dl className={styles.studentDetails}>
                <div>
                  <dt>Cupos actuales</dt>
                  <dd>{student.available_classes}</dd>
                </div>
                <div>
                  <dt>Total comprado</dt>
                  <dd>{student.total_purchased}</dd>
                </div>
                <div>
                  <dt>Registro</dt>
                  <dd>
                    {new Intl.DateTimeFormat('es-DO', {
                      dateStyle: 'medium',
                    }).format(new Date(student.joined_at))}
                  </dd>
                </div>
              </dl>

              <div className={styles.purchaseEditor}>
                <span>Confirmar una compra</span>
                <div className={styles.purchaseButtons}>
                  {purchasePackages.map((classes) => (
                    <button
                      key={classes}
                      type="button"
                      onClick={() =>
                        confirmPurchase(student, classes)
                      }
                      disabled={
                        purchasingId === student.user_id ||
                        savingId === student.user_id
                      }
                    >
                      +{classes} clases
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.balanceEditor}>
                <label htmlFor={`balance-${student.user_id}`}>
                  Ajustar cupos disponibles
                </label>
                <div className={styles.balanceControls}>
                  <input
                    id={`balance-${student.user_id}`}
                    type="number"
                    min="0"
                    max="10000"
                    step="1"
                    inputMode="numeric"
                    value={
                      draftBalances[student.user_id] ?? '0'
                    }
                    onChange={(event) =>
                      setDraftBalances((current) => ({
                        ...current,
                        [student.user_id]: event.target.value,
                      }))
                    }
                  />
                  <button
                    type="button"
                    onClick={() => saveBalance(student)}
                    disabled={
                      savingId === student.user_id ||
                      purchasingId === student.user_id
                    }
                  >
                    {savingId === student.user_id
                      ? 'Guardando…'
                      : 'Asignar'}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
