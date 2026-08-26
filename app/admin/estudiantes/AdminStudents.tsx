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

export type StudentBooking = {
  booking_id: string;
  class_date: string;
  status: string;
  level: string;
  label: string;
  starts_at: string;
  ends_at: string;
};

export type PurchaseRequest = {
  request_id: string;
  user_id: string;
  email: string;
  full_name: string;
  package_classes: number;
  package_name: string;
  price_dop: number;
  status: string;
  week_start: string;
  reservation_end_date: string;
  schedule_id: string;
  schedule_label: string;
  level: string;
  starts_at: string;
  ends_at: string;
  created_at: string;
  expires_at: string;
};

type Notice = { type: 'success' | 'error'; text: string };
const purchasePackages = [5, 20, 80] as const;

function formatMoney(value: number) {
  return new Intl.NumberFormat('es-DO').format(value);
}

function formatTime(value: string) {
  const [hours, minutes] = value.split(':').map(Number);
  return new Intl.DateTimeFormat('es-DO', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(2026, 0, 1, hours, minutes)));
}

export default function AdminStudents({
  initialStudents,
  initialRequests,
}: {
  initialStudents: AdminStudent[];
  initialRequests: PurchaseRequest[];
}) {
  const supabase = useMemo(() => createClient(), []);
  const [students, setStudents] = useState(initialStudents);
  const [requests, setRequests] = useState(initialRequests);
  const [search, setSearch] = useState('');
  const [draftBalances, setDraftBalances] = useState<Record<string, string>>(
    () =>
      Object.fromEntries(
        initialStudents.map((student) => [
          student.user_id,
          String(student.available_classes),
        ]),
      ),
  );
  const [busyId, setBusyId] = useState<string | null>(null);
  const [notices, setNotices] = useState<Record<string, Notice | undefined>>({});
  const [requestNotice, setRequestNotice] = useState<Notice | null>(null);
  const [expandedStudentId, setExpandedStudentId] = useState<string | null>(null);
  const [bookingsByStudent, setBookingsByStudent] = useState<
    Record<string, StudentBooking[]>
  >({});
  const [bookingsLoading, setBookingsLoading] = useState<Record<string, boolean>>({});
  const [bookingsError, setBookingsError] = useState<Record<string, string>>({});
  const [cancellingBookingId, setCancellingBookingId] = useState<string | null>(null);

  const filteredStudents = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return students;

    return students.filter((student) =>
      [student.full_name, student.email, student.english_level].some((value) =>
        value.toLowerCase().includes(query),
      ),
    );
  }, [search, students]);

  function updateStudentBalance(
    userId: string,
    availableClasses: number,
    totalPurchased?: number,
  ) {
    setStudents((current) =>
      current.map((student) =>
        student.user_id === userId
          ? {
              ...student,
              available_classes: availableClasses,
              total_purchased: totalPurchased ?? student.total_purchased,
            }
          : student,
      ),
    );
    setDraftBalances((current) => ({
      ...current,
      [userId]: String(availableClasses),
    }));
  }

  async function reviewRequest(request: PurchaseRequest, approve: boolean) {
    if (busyId) return;
    setBusyId(request.request_id);
    setRequestNotice(null);

    const { data, error } = await supabase.rpc(
      'admin_review_group_purchase_request',
      {
        p_request_id: request.request_id,
        p_approve: approve,
      },
    );

    setBusyId(null);

    if (error) {
      setRequestNotice({ type: 'error', text: error.message });
      return;
    }

    const result = Array.isArray(data) ? data[0] : data;
    if (approve) {
      updateStudentBalance(
        request.user_id,
        Number(result?.available_classes ?? 0),
        Number(result?.total_purchased ?? request.package_classes),
      );
    }
    setRequests((current) =>
      current.filter((item) => item.request_id !== request.request_id),
    );
    setRequestNotice({
      type: 'success',
      text: approve
        ? `Compra aprobada: se reservaron ${request.package_classes} clases.`
        : 'Solicitud rechazada.',
    });
  }

  async function confirmPurchase(
    student: AdminStudent,
    classes: (typeof purchasePackages)[number],
  ) {
    setBusyId(student.user_id);
    setNotices((current) => ({ ...current, [student.user_id]: undefined }));

    const { data, error } = await supabase.rpc('admin_confirm_class_purchase', {
      p_user_id: student.user_id,
      p_classes: classes,
    });
    setBusyId(null);

    if (error) {
      setNotices((current) => ({
        ...current,
        [student.user_id]: { type: 'error', text: error.message },
      }));
      return;
    }

    const result = Array.isArray(data) ? data[0] : data;
    updateStudentBalance(
      student.user_id,
      Number(result?.available_classes ?? student.available_classes + classes),
      Number(result?.total_purchased ?? student.total_purchased + classes),
    );
    setNotices((current) => ({
      ...current,
      [student.user_id]: {
        type: 'success',
        text: `Compra manual confirmada: +${classes} clases.`,
      },
    }));
  }

  async function saveBalance(student: AdminStudent) {
    const newBalance = Number(draftBalances[student.user_id]);
    if (!Number.isInteger(newBalance) || newBalance < 0 || newBalance > 10000) {
      setNotices((current) => ({
        ...current,
        [student.user_id]: {
          type: 'error',
          text: 'Escribe una cantidad entera entre 0 y 10,000.',
        },
      }));
      return;
    }

    setBusyId(student.user_id);
    const { data, error } = await supabase.rpc('admin_set_class_balance', {
      p_user_id: student.user_id,
      p_available_classes: newBalance,
    });
    setBusyId(null);

    if (error) {
      setNotices((current) => ({
        ...current,
        [student.user_id]: { type: 'error', text: error.message },
      }));
      return;
    }

    const confirmed = Number(data ?? newBalance);
    updateStudentBalance(student.user_id, confirmed);
    setNotices((current) => ({
      ...current,
      [student.user_id]: {
        type: 'success',
        text: `Guardado: ahora tiene ${confirmed} clases disponibles.`,
      },
    }));
  }

  async function toggleBookings(student: AdminStudent) {
    if (expandedStudentId === student.user_id) {
      setExpandedStudentId(null);
      return;
    }

    setExpandedStudentId(student.user_id);

    if (bookingsByStudent[student.user_id]) return;

    setBookingsLoading((current) => ({ ...current, [student.user_id]: true }));
    setBookingsError((current) => ({ ...current, [student.user_id]: '' }));

    const { data, error } = await supabase.rpc('admin_list_student_bookings', {
      p_user_id: student.user_id,
    });

    setBookingsLoading((current) => ({ ...current, [student.user_id]: false }));

    if (error) {
      setBookingsError((current) => ({
        ...current,
        [student.user_id]: error.message,
      }));
      return;
    }

    setBookingsByStudent((current) => ({
      ...current,
      [student.user_id]: (data ?? []) as StudentBooking[],
    }));
  }

  async function cancelBooking(studentId: string, booking: StudentBooking) {
    if (cancellingBookingId) return;
    setCancellingBookingId(booking.booking_id);
    setBookingsError((current) => ({ ...current, [studentId]: '' }));

    const { error } = await supabase.rpc('admin_cancel_group_class_booking', {
      p_booking_id: booking.booking_id,
    });

    setCancellingBookingId(null);

    if (error) {
      setBookingsError((current) => ({ ...current, [studentId]: error.message }));
      return;
    }

    setBookingsByStudent((current) => ({
      ...current,
      [studentId]: (current[studentId] ?? []).map((item) =>
        item.booking_id === booking.booking_id ? { ...item, status: 'cancelled' } : item,
      ),
    }));
  }

  return (
    <>
      <section className={styles.requestsPanel}>
        <div className={styles.requestsHeading}>
          <div>
            <p className={styles.eyebrow}>PAGOS PENDIENTES</p>
            <h2>Solicitudes de compra</h2>
          </div>
          <strong>{requests.length}</strong>
        </div>

        {requestNotice ? (
          <p className={requestNotice.type === 'error' ? styles.inlineError : styles.inlineSuccess}>
            {requestNotice.text}
          </p>
        ) : null}

        {requests.length === 0 ? (
          <div className={styles.emptyState}>No hay solicitudes pendientes.</div>
        ) : (
          <div className={styles.requestGrid}>
            {requests.map((request) => (
              <article key={request.request_id} className={styles.requestCard}>
                <div className={styles.requestTop}>
                  <div><h3>{request.full_name}</h3><a href={`mailto:${request.email}`}>{request.email}</a></div>
                  <span>{request.level.toUpperCase()}</span>
                </div>
                <dl>
                  <div><dt>Paquete</dt><dd>{request.package_classes} clases</dd></div>
                  <div><dt>Monto</dt><dd>RD${formatMoney(Number(request.price_dop))}</dd></div>
                  <div><dt>Horario</dt><dd>{formatTime(request.starts_at)}–{formatTime(request.ends_at)}</dd></div>
                  <div><dt>Periodo</dt><dd>{request.week_start} → {request.reservation_end_date}</dd></div>
                </dl>
                <div className={styles.requestActions}>
                  <button type="button" className={styles.rejectButton} disabled={busyId === request.request_id} onClick={() => reviewRequest(request, false)}>Rechazar</button>
                  <button type="button" disabled={busyId === request.request_id} onClick={() => reviewRequest(request, true)}>{busyId === request.request_id ? 'Procesando…' : 'Aprobar y reservar'}</button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className={styles.panel}>
        <div className={styles.toolbar}>
          <div><h2>Todos los estudiantes</h2><p>{students.length} cuentas registradas</p></div>
          <label className={styles.searchField}><span>Buscar</span><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Nombre, correo o nivel" /></label>
        </div>

        <div className={styles.studentGrid}>
          {filteredStudents.map((student) => (
            <article key={student.user_id} className={styles.studentCard}>
              <div className={styles.studentHeading}>
                <div><h3>{student.full_name}</h3><a href={`mailto:${student.email}`}>{student.email}</a></div>
                <span className={styles.levelBadge}>{student.english_level}</span>
              </div>
              <dl className={styles.studentDetails}>
                <div><dt>Clases disponibles</dt><dd>{student.available_classes}</dd></div>
                <div><dt>Total comprado</dt><dd>{student.total_purchased}</dd></div>
                <div><dt>Registro</dt><dd>{new Intl.DateTimeFormat('es-DO', { dateStyle: 'medium' }).format(new Date(student.joined_at))}</dd></div>
              </dl>
              <div className={styles.bookingsSection}>
                <button
                  type="button"
                  className={styles.bookingsToggle}
                  onClick={() => toggleBookings(student)}
                >
                  {expandedStudentId === student.user_id
                    ? 'Ocultar clases reservadas'
                    : 'Ver clases reservadas'}
                </button>

                {expandedStudentId === student.user_id ? (
                  <div className={styles.bookingsList}>
                    {bookingsError[student.user_id] ? (
                      <p className={styles.inlineError}>{bookingsError[student.user_id]}</p>
                    ) : null}
                    {bookingsLoading[student.user_id] ? (
                      <p className={styles.inlineError}>Cargando reservas…</p>
                    ) : (bookingsByStudent[student.user_id]?.length ?? 0) === 0 ? (
                      <p className={styles.inlineError}>No tiene clases reservadas.</p>
                    ) : (
                      <ul>
                        {bookingsByStudent[student.user_id]?.map((booking) => (
                          <li key={booking.booking_id}>
                            <span>
                              {new Intl.DateTimeFormat('es-DO', { dateStyle: 'medium' }).format(
                                new Date(`${booking.class_date}T00:00:00`),
                              )}
                            </span>
                            <span>
                              {booking.level.toUpperCase()} · {booking.label} ·{' '}
                              {formatTime(booking.starts_at)}–{formatTime(booking.ends_at)}
                            </span>
                            <span className={styles.bookingRowEnd}>
                              <span className={styles.bookingStatus} data-status={booking.status}>
                                {booking.status}
                              </span>
                              {booking.status === 'reserved' ? (
                                <button
                                  type="button"
                                  className={styles.cancelBookingButton}
                                  onClick={() => cancelBooking(student.user_id, booking)}
                                  disabled={cancellingBookingId === booking.booking_id}
                                >
                                  {cancellingBookingId === booking.booking_id
                                    ? 'Cancelando…'
                                    : 'Cancelar reserva'}
                                </button>
                              ) : null}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : null}
              </div>

              <div className={styles.purchaseEditor}>
                <span>Asignación manual</span>
                <div className={styles.purchaseButtons}>
                  {purchasePackages.map((classes) => (
                    <button key={classes} type="button" onClick={() => confirmPurchase(student, classes)} disabled={busyId === student.user_id}>+{classes} clases</button>
                  ))}
                </div>
              </div>
              <div className={styles.balanceEditor}>
                <label htmlFor={`balance-${student.user_id}`}>Ajustar saldo disponible</label>
                <div className={styles.balanceControls}>
                  <input id={`balance-${student.user_id}`} type="number" min="0" max="10000" value={draftBalances[student.user_id] ?? '0'} onChange={(event) => setDraftBalances((current) => ({ ...current, [student.user_id]: event.target.value }))} />
                  <button type="button" className={styles.discardButton} onClick={() => setDraftBalances((current) => ({ ...current, [student.user_id]: String(student.available_classes) }))}>Descartar</button>
                  <button type="button" onClick={() => saveBalance(student)} disabled={busyId === student.user_id}>Asignar</button>
                </div>
                {notices[student.user_id] ? (
                  <p className={notices[student.user_id]?.type === 'error' ? styles.inlineError : styles.inlineSuccess}>{notices[student.user_id]?.text}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
