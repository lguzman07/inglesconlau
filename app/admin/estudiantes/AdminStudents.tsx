'use client';

import { useEffect, useMemo, useState } from 'react';

import { createClient } from '@/lib/supabase/client';

import styles from './page.module.css';

type ScheduleAvailability = {
  schedule_id: string;
  level: string;
  label: string;
  starts_at: string;
  ends_at: string;
  max_students: number;
  enrolled_count: number;
  spots_remaining: number;
};

type ActiveSchedule = {
  schedule_id: string;
  level: string;
  label: string;
  starts_at: string;
  ends_at: string;
  max_students: number;
};

export type AdminStudent = {
  user_id: string;
  email: string;
  full_name: string;
  english_level: string;
  available_classes: number;
  total_purchased: number;
  joined_at: string;
  has_upcoming_class: boolean;
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
  receipt_path: string | null;
  receipt_uploaded_at: string | null;
};

type Notice = { type: 'success' | 'error'; text: string };
const purchasePackages = [5, 20, 80] as const;

function formatMoney(value: number) {
  return new Intl.NumberFormat('es-DO').format(value);
}

function formatDate(value: string) {
  const [year, month, day] = value.split('-');
  return `${day}/${month}/${year}`;
}

function getMonthKey(value: string) {
  return value.slice(0, 7);
}

function formatMonthLabel(monthKey: string) {
  const [year, month] = monthKey.split('-').map(Number);
  const formatted = new Intl.DateTimeFormat('es-DO', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, 1)));

  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

function groupBookingsByMonth(bookings: StudentBooking[]) {
  const groups = new Map<string, StudentBooking[]>();

  for (const booking of bookings) {
    const key = getMonthKey(booking.class_date);
    const existing = groups.get(key);
    if (existing) {
      existing.push(booking);
    } else {
      groups.set(key, [booking]);
    }
  }

  return Array.from(groups.entries()).map(([monthKey, monthBookings]) => ({
    monthKey,
    bookings: monthBookings,
  }));
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
  const [levelFilter, setLevelFilter] = useState('all');
  const [activityFilter, setActivityFilter] = useState<
    'all' | 'active' | 'unscheduled'
  >('active');
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
  const [loadingReceiptId, setLoadingReceiptId] = useState<string | null>(null);
  const [notices, setNotices] = useState<Record<string, Notice | undefined>>({});
  const [requestNotice, setRequestNotice] = useState<Notice | null>(null);
  const [expandedStudentId, setExpandedStudentId] = useState<string | null>(null);
  const [bookingsByStudent, setBookingsByStudent] = useState<
    Record<string, StudentBooking[]>
  >({});
  const [bookingsLoading, setBookingsLoading] = useState<Record<string, boolean>>({});
  const [bookingsError, setBookingsError] = useState<Record<string, string>>({});
  const [cancellingBookingId, setCancellingBookingId] = useState<string | null>(null);
  const [activeSchedules, setActiveSchedules] = useState<ActiveSchedule[]>([]);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [availability, setAvailability] = useState<ScheduleAvailability[]>([]);
  const [isLoadingAvailability, setIsLoadingAvailability] = useState(false);
  const [availabilityError, setAvailabilityError] = useState('');
  const [assignScheduleId, setAssignScheduleId] = useState<Record<string, string>>({});
  const [assignDate, setAssignDate] = useState<Record<string, string>>({});
  const [assigningId, setAssigningId] = useState<string | null>(null);

  useEffect(() => {
    async function loadSchedules() {
      const { data, error } = await supabase.rpc('admin_list_active_schedules');
      if (!error) setActiveSchedules((data ?? []) as ActiveSchedule[]);
    }

    void loadSchedules();
  }, [supabase]);

  const sortedAvailability = useMemo(
    () => [...availability].sort((a, b) => a.starts_at.localeCompare(b.starts_at)),
    [availability],
  );

  const levels = useMemo(
    () =>
      Array.from(new Set(students.map((student) => student.english_level))).sort((a, b) =>
        a.localeCompare(b, 'es'),
      ),
    [students],
  );

  const filteredStudents = useMemo(() => {
    const query = search.trim().toLowerCase();

    return students.filter((student) => {
      if (levelFilter !== 'all' && student.english_level !== levelFilter) return false;

      if (
        activityFilter === 'active' &&
        student.available_classes <= 0 &&
        !student.has_upcoming_class
      ) {
        return false;
      }

      if (activityFilter === 'unscheduled' && student.has_upcoming_class) {
        return false;
      }

      if (!query) return true;

      return [student.full_name, student.email, student.english_level].some((value) =>
        value.toLowerCase().includes(query),
      );
    });
  }, [search, students, levelFilter, activityFilter]);

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

  async function viewReceipt(request: PurchaseRequest) {
    if (loadingReceiptId || !request.receipt_path) return;

    setLoadingReceiptId(request.request_id);

    const { data, error } = await supabase.storage
      .from('payment-receipts')
      .createSignedUrl(request.receipt_path, 120);

    setLoadingReceiptId(null);

    if (error || !data?.signedUrl) {
      setRequestNotice({ type: 'error', text: 'No pudimos abrir el comprobante.' });
      return;
    }

    window.open(data.signedUrl, '_blank', 'noopener,noreferrer');
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

  async function toggleAvailability() {
    if (isAvailabilityOpen) {
      setIsAvailabilityOpen(false);
      return;
    }

    setIsAvailabilityOpen(true);
    setIsLoadingAvailability(true);
    setAvailabilityError('');

    const { data, error } = await supabase.rpc('admin_list_schedule_availability');

    setIsLoadingAvailability(false);

    if (error) {
      setAvailabilityError(error.message);
      return;
    }

    setAvailability((data ?? []) as ScheduleAvailability[]);
  }

  async function loadBookings(studentId: string) {
    setBookingsLoading((current) => ({ ...current, [studentId]: true }));
    setBookingsError((current) => ({ ...current, [studentId]: '' }));

    const { data, error } = await supabase.rpc('admin_list_student_bookings', {
      p_user_id: studentId,
    });

    setBookingsLoading((current) => ({ ...current, [studentId]: false }));

    if (error) {
      setBookingsError((current) => ({ ...current, [studentId]: error.message }));
      return;
    }

    setBookingsByStudent((current) => ({
      ...current,
      [studentId]: (data ?? []) as StudentBooking[],
    }));
  }

  async function toggleBookings(student: AdminStudent) {
    if (expandedStudentId === student.user_id) {
      setExpandedStudentId(null);
      return;
    }

    setExpandedStudentId(student.user_id);

    if (bookingsByStudent[student.user_id]) return;

    void loadBookings(student.user_id);
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

  async function assignClass(student: AdminStudent) {
    const scheduleId = assignScheduleId[student.user_id];
    const classDate = assignDate[student.user_id];

    if (!scheduleId || !classDate || assigningId) return;

    setAssigningId(student.user_id);
    setBookingsError((current) => ({ ...current, [student.user_id]: '' }));

    const { error } = await supabase.rpc('admin_assign_class_to_student', {
      p_user_id: student.user_id,
      p_schedule_id: scheduleId,
      p_class_date: classDate,
    });

    setAssigningId(null);

    if (error) {
      setBookingsError((current) => ({ ...current, [student.user_id]: error.message }));
      return;
    }

    updateStudentBalance(student.user_id, student.available_classes - 1);
    setAssignDate((current) => ({ ...current, [student.user_id]: '' }));

    // Make sure the section is open and refresh the list so the new class
    // shows up right away, whether or not it was already expanded.
    setExpandedStudentId(student.user_id);
    void loadBookings(student.user_id);
  }

  return (
    <>
      <section className={styles.availabilityPanel}>
        <button type="button" className={styles.availabilityToggle} onClick={toggleAvailability}>
          {isAvailabilityOpen ? 'Ocultar cupos actuales' : 'Ver cupos actuales'}
        </button>

        {isAvailabilityOpen ? (
          <div className={styles.availabilityList}>
            {isLoadingAvailability ? (
              <p className={styles.inlineError}>Cargando cupos…</p>
            ) : availabilityError ? (
              <p className={styles.inlineError}>{availabilityError}</p>
            ) : (
              sortedAvailability.map((schedule) => {
                const isFull = schedule.spots_remaining <= 0;

                return (
                  <div
                    key={schedule.schedule_id}
                    className={`${styles.availabilityRow} ${isFull ? styles.availabilityRowFull : ''}`}
                  >
                    <span>
                      {schedule.level.toUpperCase()} · {schedule.label} ·{' '}
                      {formatTime(schedule.starts_at)}–{formatTime(schedule.ends_at)}
                    </span>
                    <strong>
                      {isFull
                        ? 'Sin cupos'
                        : `${schedule.spots_remaining} de ${schedule.max_students} cupos`}
                    </strong>
                  </div>
                );
              })
            )}
          </div>
        ) : null}
      </section>

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
                  <div><dt>Periodo</dt><dd>{formatDate(request.week_start)} → {formatDate(request.reservation_end_date)}</dd></div>
                </dl>
                {request.receipt_path ? (
                  <button
                    type="button"
                    className={styles.receiptButton}
                    disabled={loadingReceiptId === request.request_id}
                    onClick={() => void viewReceipt(request)}
                  >
                    {loadingReceiptId === request.request_id ? 'Abriendo…' : '📎 Ver comprobante'}
                  </button>
                ) : (
                  <p className={styles.noReceiptNote}>Sin comprobante subido aún</p>
                )}
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
          <div>
            <h2>Todos los estudiantes</h2>
            <p>{filteredStudents.length} de {students.length} cuentas</p>
          </div>
          <label className={styles.searchField}><span>Buscar</span><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Nombre, correo o nivel" /></label>
        </div>

        <div className={styles.filterRow}>
          <div className={styles.levelFilter}>
            <button
              type="button"
              className={levelFilter === 'all' ? styles.levelFilterActive : ''}
              onClick={() => setLevelFilter('all')}
            >
              Todos los niveles
            </button>
            {levels.map((level) => (
              <button
                key={level}
                type="button"
                className={levelFilter === level ? styles.levelFilterActive : ''}
                onClick={() => setLevelFilter(level)}
              >
                {level}
              </button>
            ))}
          </div>

          <div className={styles.levelFilter}>
            <button
              type="button"
              className={activityFilter === 'all' ? styles.levelFilterActive : ''}
              onClick={() => setActivityFilter('all')}
            >
              Todos
            </button>
            <button
              type="button"
              className={activityFilter === 'active' ? styles.levelFilterActive : ''}
              onClick={() => setActivityFilter('active')}
            >
              Con clases disponibles o agendadas
            </button>
            <button
              type="button"
              className={activityFilter === 'unscheduled' ? styles.levelFilterActive : ''}
              onClick={() => setActivityFilter('unscheduled')}
            >
              Sin clases agendadas
            </button>
          </div>
        </div>

        {filteredStudents.length === 0 ? (
          <div className={styles.emptyState}>
            Ningún estudiante coincide con estos filtros.
          </div>
        ) : null}

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
              <div className={styles.assignClassRow}>
                <span>Asignar una clase</span>
                <div className={styles.assignClassControls}>
                  <select
                    value={assignScheduleId[student.user_id] ?? ''}
                    onChange={(event) =>
                      setAssignScheduleId((current) => ({
                        ...current,
                        [student.user_id]: event.target.value,
                      }))
                    }
                  >
                    <option value="">Horario…</option>
                    {activeSchedules.map((schedule) => (
                      <option key={schedule.schedule_id} value={schedule.schedule_id}>
                        {schedule.level.toUpperCase()} · {schedule.label} ·{' '}
                        {formatTime(schedule.starts_at)}–{formatTime(schedule.ends_at)}
                      </option>
                    ))}
                  </select>
                  <input
                    type="date"
                    value={assignDate[student.user_id] ?? ''}
                    onChange={(event) =>
                      setAssignDate((current) => ({
                        ...current,
                        [student.user_id]: event.target.value,
                      }))
                    }
                  />
                  <button
                    type="button"
                    onClick={() => assignClass(student)}
                    disabled={
                      assigningId === student.user_id ||
                      !assignScheduleId[student.user_id] ||
                      !assignDate[student.user_id] ||
                      student.available_classes <= 0
                    }
                  >
                    {assigningId === student.user_id ? 'Asignando…' : 'Asignar'}
                  </button>
                </div>
                {student.available_classes <= 0 ? (
                  <p className={styles.inlineError}>
                    No tiene clases disponibles. Asigna un paquete primero.
                  </p>
                ) : null}
              </div>

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
                    ) : (bookingsByStudent[student.user_id]?.filter((booking) => booking.status === 'reserved').length ?? 0) === 0 ? (
                      <p className={styles.inlineError}>No tiene clases reservadas.</p>
                    ) : (
                      groupBookingsByMonth(
                        (bookingsByStudent[student.user_id] ?? [])
                          .filter((booking) => booking.status === 'reserved')
                          .sort((a, b) => a.class_date.localeCompare(b.class_date)),
                      ).map(({ monthKey, bookings: monthBookings }) => (
                        <details key={monthKey} className={styles.monthGroup}>
                          <summary>
                            {formatMonthLabel(monthKey)} ({monthBookings.length}{' '}
                            {monthBookings.length === 1 ? 'clase' : 'clases'})
                          </summary>
                          <ul>
                            {monthBookings.map((booking) => (
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
                                </span>
                              </li>
                            ))}
                          </ul>
                        </details>
                      ))
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
