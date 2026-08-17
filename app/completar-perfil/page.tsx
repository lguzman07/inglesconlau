'use client';

import {
  FormEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import styles from './page.module.css';

const COUNTRIES = `
República Dominicana
Afganistán
Albania
Alemania
Andorra
Angola
Antigua y Barbuda
Arabia Saudita
Argelia
Argentina
Armenia
Australia
Austria
Azerbaiyán
Bahamas
Bangladés
Barbados
Baréin
Bélgica
Belice
Benín
Bielorrusia
Birmania
Bolivia
Bosnia y Herzegovina
Botsuana
Brasil
Brunéi
Bulgaria
Burkina Faso
Burundi
Bután
Cabo Verde
Camboya
Camerún
Canadá
Catar
Chad
Chile
China
Chipre
Ciudad del Vaticano
Colombia
Comoras
Corea del Norte
Corea del Sur
Costa de Marfil
Costa Rica
Croacia
Cuba
Dinamarca
Dominica
Ecuador
Egipto
El Salvador
Emiratos Árabes Unidos
Eritrea
Eslovaquia
Eslovenia
España
Estados Unidos
Estonia
Esuatini
Etiopía
Filipinas
Finlandia
Fiyi
Francia
Gabón
Gambia
Georgia
Ghana
Granada
Grecia
Guatemala
Guinea
Guinea-Bisáu
Guinea Ecuatorial
Guyana
Haití
Honduras
Hungría
India
Indonesia
Irak
Irán
Irlanda
Islandia
Islas Marshall
Islas Salomón
Israel
Italia
Jamaica
Japón
Jordania
Kazajistán
Kenia
Kirguistán
Kiribati
Kuwait
Laos
Lesoto
Letonia
Líbano
Liberia
Libia
Liechtenstein
Lituania
Luxemburgo
Macedonia del Norte
Madagascar
Malasia
Malaui
Maldivas
Malí
Malta
Marruecos
Mauricio
Mauritania
México
Micronesia
Moldavia
Mónaco
Mongolia
Montenegro
Mozambique
Namibia
Nauru
Nepal
Nicaragua
Níger
Nigeria
Noruega
Nueva Zelanda
Omán
Países Bajos
Pakistán
Palaos
Palestina
Panamá
Papúa Nueva Guinea
Paraguay
Perú
Polonia
Portugal
Reino Unido
República Centroafricana
República Checa
República del Congo
República Democrática del Congo
Ruanda
Rumanía
Rusia
Samoa
San Cristóbal y Nieves
San Marino
San Vicente y las Granadinas
Santa Lucía
Santo Tomé y Príncipe
Senegal
Serbia
Seychelles
Sierra Leona
Singapur
Siria
Somalia
Sri Lanka
Sudáfrica
Sudán
Sudán del Sur
Suecia
Suiza
Surinam
Tailandia
Tanzania
Tayikistán
Timor Oriental
Togo
Tonga
Trinidad y Tobago
Túnez
Turkmenistán
Turquía
Tuvalu
Ucrania
Uganda
Uruguay
Uzbekistán
Vanuatu
Venezuela
Vietnam
Yemen
Yibuti
Zambia
Zimbabue
`
  .trim()
  .split('\n');

const ENGLISH_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'No lo sé'];

const GENDERS = ['Femenino', 'Masculino', 'Prefiero no decirlo'];

const LEARNING_GOALS = [
  'Conversar con confianza',
  'Conseguir empleo o crecer profesionalmente',
  'Viajar y comunicarme con facilidad',
  'Estudiar o prepararme académicamente',
  'Mejorar mi inglés general',
];

const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

const WEEKDAYS = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

const MINIMUM_AGE = 18;
const TODAY = new Date();

const MAXIMUM_BIRTH_DATE = new Date(
  TODAY.getFullYear() - MINIMUM_AGE,
  TODAY.getMonth(),
  TODAY.getDate()
);

const MAXIMUM_BIRTH_YEAR = MAXIMUM_BIRTH_DATE.getFullYear();

const BIRTH_YEARS = Array.from(
  { length: MAXIMUM_BIRTH_YEAR - 1899 },
  (_, index) => MAXIMUM_BIRTH_YEAR - index
);

type Profile = {
  full_name: string;
  birth_date: string;
  country: string;
  gender: string;
  english_level: string;
  learning_goal: string;
};

const EMPTY_PROFILE: Profile = {
  full_name: '',
  birth_date: '',
  country: '',
  gender: '',
  english_level: '',
  learning_goal: '',
};

function normalizeSearch(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('es')
    .trim();
}

function parseStoredDate(value: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);

  if (!match) {
    return null;
  }

  const date = new Date(
    Number(match[1]),
    Number(match[2]) - 1,
    Number(match[3])
  );

  return Number.isNaN(date.getTime()) ? null : date;
}

function formatStoredDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function formatDisplayDate(value: string) {
  const date = parseStoredDate(value);

  if (!date) {
    return '';
  }

  return new Intl.DateTimeFormat('es-DO', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
}

export default function CompletarPerfilPage() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);
  const datePickerRef = useRef<HTMLDivElement>(null);
  const countryPickerRef = useRef<HTMLDivElement>(null);

  const [userId, setUserId] = useState<string | null>(null);
  const [profile, setProfile] = useState<Profile>(EMPTY_PROFILE);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [visibleMonth, setVisibleMonth] = useState(
    () =>
      new Date(
        MAXIMUM_BIRTH_DATE.getFullYear(),
        MAXIMUM_BIRTH_DATE.getMonth(),
        1
      )
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const filteredCountries = useMemo(() => {
    const query = normalizeSearch(profile.country);

    if (!query) {
      return COUNTRIES;
    }

    return COUNTRIES.filter((country) =>
      normalizeSearch(country).includes(query)
    );
  }, [profile.country]);

  const calendarDays = useMemo(() => {
    const year = visibleMonth.getFullYear();
    const month = visibleMonth.getMonth();
    const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    return [
      ...Array.from({ length: firstWeekday }, () => null),
      ...Array.from(
        { length: daysInMonth },
        (_, index) => new Date(year, month, index + 1)
      ),
    ];
  }, [visibleMonth]);

  useEffect(() => {
    function closePickers(event: MouseEvent) {
      const target = event.target as Node;

      if (!datePickerRef.current?.contains(target)) {
        setIsCalendarOpen(false);
      }

      if (!countryPickerRef.current?.contains(target)) {
        setIsCountryOpen(false);
      }
    }

    document.addEventListener('mousedown', closePickers);

    return () => {
      document.removeEventListener('mousedown', closePickers);
    };
  }, []);

  useEffect(() => {
    async function loadUserAndProfile() {
      setIsLoading(true);
      setErrorMessage('');

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        router.replace('/iniciar-sesion');
        return;
      }

      setUserId(user.id);

      const { data, error } = await supabase
        .from('profiles')
        .select(
          'full_name, birth_date, country, gender, english_level, learning_goal'
        )
        .eq('id', user.id)
        .maybeSingle();

      if (error) {
        setErrorMessage(
          'No pudimos cargar tu perfil. Inténtalo nuevamente.'
        );
        setIsLoading(false);
        return;
      }

      if (data) {
        setProfile({
          full_name: data.full_name ?? '',
          birth_date: data.birth_date ?? '',
          country: data.country ?? '',
          gender: data.gender ?? '',
          english_level: data.english_level ?? '',
          learning_goal: data.learning_goal ?? '',
        });

        const savedBirthDate = parseStoredDate(data.birth_date ?? '');

        if (savedBirthDate) {
          setVisibleMonth(
            new Date(
              savedBirthDate.getFullYear(),
              savedBirthDate.getMonth(),
              1
            )
          );
        }
      }

      setIsLoading(false);
    }

    void loadUserAndProfile();
  }, [router, supabase]);

  function updateField(field: keyof Profile, value: string) {
    setProfile((currentProfile) => ({
      ...currentProfile,
      [field]: value,
    }));

    setErrorMessage('');
    setSuccessMessage('');
  }

  function selectBirthDate(date: Date) {
    updateField('birth_date', formatStoredDate(date));
    setVisibleMonth(new Date(date.getFullYear(), date.getMonth(), 1));
    setIsCalendarOpen(false);
  }

  function selectCountry(country: string) {
    updateField('country', country);
    setIsCountryOpen(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage('');
    setSuccessMessage('');

    if (!userId) {
      setErrorMessage(
        'No pudimos verificar tu sesión. Inicia sesión nuevamente.'
      );
      return;
    }

    const countryQuery = normalizeSearch(profile.country);

    const normalizedCountry = COUNTRIES.find(
      (country) => normalizeSearch(country) === countryQuery
    );

    if (!normalizedCountry) {
      setErrorMessage(
        'Selecciona un país válido de la lista de opciones.'
      );
      return;
    }

    const selectedBirthDate = parseStoredDate(profile.birth_date);

    if (!selectedBirthDate || selectedBirthDate > MAXIMUM_BIRTH_DATE) {
      setErrorMessage(
        'Debes tener al menos 18 años para crear una cuenta.'
      );
      return;
    }

    if (
      !profile.full_name.trim() ||
      !profile.birth_date ||
      !profile.gender ||
      !profile.english_level ||
      !profile.learning_goal
    ) {
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }

    if (!ENGLISH_LEVELS.includes(profile.english_level)) {
      setErrorMessage('Selecciona un nivel de inglés válido.');
      return;
    }

    if (!GENDERS.includes(profile.gender)) {
      setErrorMessage('Selecciona una opción de género válida.');
      return;
    }

    if (!LEARNING_GOALS.includes(profile.learning_goal)) {
      setErrorMessage('Selecciona un objetivo principal válido.');
      return;
    }

    setIsSaving(true);

    const { error } = await supabase.from('profiles').upsert(
      {
        id: userId,
        full_name: profile.full_name.trim(),
        birth_date: profile.birth_date,
        country: normalizedCountry,
        gender: profile.gender,
        english_level: profile.english_level,
        learning_goal: profile.learning_goal,
      },
      {
        onConflict: 'id',
      }
    );

    setIsSaving(false);

    if (error) {
      setErrorMessage(
        'No pudimos guardar tu perfil. Inténtalo nuevamente.'
      );
      return;
    }

    setProfile((currentProfile) => ({
      ...currentProfile,
      full_name: currentProfile.full_name.trim(),
      country: normalizedCountry,
    }));

    setSuccessMessage('Tu perfil se guardó correctamente.');
    router.push('/inicio');
  }

  if (isLoading) {
    return (
      <main className="complete-profile-page">
        <section className="complete-profile-card">
          <p className="profile-loading">Cargando tu perfil...</p>
        </section>
      </main>
    );
  }

  return (
    <main className="complete-profile-page">
      <Link className={styles.backLink} href="/inicio">
        ← Volver al dashboard
      </Link>

      <section className="complete-profile-card">
        <div className="complete-profile-header">
          <p className="complete-profile-eyebrow">INGLÉS CON LAU</p>

          <h1>Completa tu perfil</h1>

          <p>
            Cuéntame un poco sobre ti para personalizar tu experiencia de
            aprendizaje.
          </p>
        </div>

        <form className="complete-profile-form" onSubmit={handleSubmit}>
          <div className="profile-field">
            <label htmlFor="full-name">Nombre completo</label>

            <input
              id="full-name"
              name="fullName"
              type="text"
              value={profile.full_name}
              onChange={(event) =>
                updateField('full_name', event.target.value)
              }
              placeholder="Escribe tu nombre completo"
              autoComplete="name"
              required
            />
          </div>

          <div className="profile-field">
            <label htmlFor="birth-date">Fecha de nacimiento</label>

            <div className="pretty-picker" ref={datePickerRef}>
              <button
                id="birth-date"
                className={`pretty-picker-trigger${
                  profile.birth_date ? '' : ' is-placeholder'
                }`}
                type="button"
                onClick={() => {
                  setIsCalendarOpen((current) => !current);
                  setIsCountryOpen(false);
                }}
                aria-haspopup="dialog"
                aria-expanded={isCalendarOpen}
              >
                <span>
                  {formatDisplayDate(profile.birth_date) || 'DD/MM/AAAA'}
                </span>

                <span className="calendar-icon" aria-hidden="true">
                  ◦
                </span>
              </button>

              {isCalendarOpen && (
                <div
                  className="calendar-popover"
                  role="dialog"
                  aria-label="Seleccionar fecha de nacimiento"
                >
                  <div className="calendar-header">
                    <button
                      type="button"
                      onClick={() =>
                        setVisibleMonth(
                          (current) =>
                            new Date(
                              current.getFullYear(),
                              current.getMonth() - 1,
                              1
                            )
                        )
                      }
                      aria-label="Mes anterior"
                      disabled={
                        visibleMonth.getFullYear() === 1900 &&
                        visibleMonth.getMonth() === 0
                      }
                    >
                      ‹
                    </button>

                    <div className="calendar-selectors">
                      <select
                        aria-label="Mes"
                        value={visibleMonth.getMonth()}
                        onChange={(event) =>
                          setVisibleMonth(
                            new Date(
                              visibleMonth.getFullYear(),
                              Number(event.target.value),
                              1
                            )
                          )
                        }
                      >
                        {MONTHS.map((month, index) => (
                          <option key={month} value={index}>
                            {month}
                          </option>
                        ))}
                      </select>

                      <select
                        aria-label="Año"
                        value={visibleMonth.getFullYear()}
                        onChange={(event) =>
                          setVisibleMonth(
                            new Date(
                              Number(event.target.value),
                              visibleMonth.getMonth(),
                              1
                            )
                          )
                        }
                      >
                        {BIRTH_YEARS.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setVisibleMonth(
                          (current) =>
                            new Date(
                              current.getFullYear(),
                              current.getMonth() + 1,
                              1
                            )
                        )
                      }
                      aria-label="Mes siguiente"
                      disabled={
                        visibleMonth.getFullYear() === MAXIMUM_BIRTH_YEAR &&
                        visibleMonth.getMonth() ===
                          MAXIMUM_BIRTH_DATE.getMonth()
                      }
                    >
                      ›
                    </button>
                  </div>

                  <div className="calendar-weekdays">
                    {WEEKDAYS.map((weekday) => (
                      <span key={weekday}>{weekday}</span>
                    ))}
                  </div>

                  <div className="calendar-grid">
                    {calendarDays.map((date, index) => {
                      if (!date) {
                        return (
                          <span
                            key={`empty-${index}`}
                            className="calendar-empty"
                          />
                        );
                      }

                      const value = formatStoredDate(date);
                      const isSelected = value === profile.birth_date;
                      const isUnderage = date > MAXIMUM_BIRTH_DATE;

                      return (
                        <button
                          key={value}
                          className={isSelected ? 'is-selected' : ''}
                          type="button"
                          onClick={() => selectBirthDate(date)}
                          disabled={isUnderage}
                          aria-pressed={isSelected}
                        >
                          {date.getDate()}
                        </button>
                      );
                    })}
                  </div>

                  <p className="calendar-format-help">
                    Formato: día / mes / año · Edad mínima: 18 años
                  </p>
                </div>
              )}
            </div>

            <input
              type="hidden"
              name="birthDate"
              value={profile.birth_date}
              required
            />
          </div>

          <div className="profile-field">
            <label htmlFor="country">País</label>

            <div className="country-picker" ref={countryPickerRef}>
              <input
                id="country"
                name="country"
                type="text"
                value={profile.country}
                onFocus={() => {
                  setIsCountryOpen(true);
                  setIsCalendarOpen(false);
                }}
                onChange={(event) => {
                  updateField('country', event.target.value);
                  setIsCountryOpen(true);
                }}
                onKeyDown={(event) => {
                  if (
                    event.key === 'Enter' &&
                    isCountryOpen &&
                    filteredCountries.length > 0
                  ) {
                    event.preventDefault();
                    selectCountry(filteredCountries[0]);
                  }
                }}
                placeholder="Escribe para buscar tu país"
                autoComplete="off"
                required
              />

              {isCountryOpen && (
                <div
                  className="country-options"
                  role="listbox"
                  aria-label="Países"
                >
                  {filteredCountries.length > 0 ? (
                    filteredCountries.map((country) => (
                      <button
                        key={country}
                        type="button"
                        role="option"
                        aria-selected={country === profile.country}
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => selectCountry(country)}
                      >
                        {country}
                      </button>
                    ))
                  ) : (
                    <p>No encontramos ese país.</p>
                  )}
                </div>
              )}
            </div>

            <p className="profile-field-help">
              Escribe el nombre y selecciona tu país de la lista.
            </p>
          </div>

          <div className="profile-field">
            <label htmlFor="gender">Género</label>

            <select
              id="gender"
              name="gender"
              value={profile.gender}
              onChange={(event) =>
                updateField('gender', event.target.value)
              }
              required
            >
              <option value="" disabled>
                Selecciona una opción
              </option>

              {GENDERS.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </div>

          <div className="profile-field">
            <label htmlFor="english-level">Nivel de inglés</label>

            <select
              id="english-level"
              name="englishLevel"
              value={profile.english_level}
              onChange={(event) =>
                updateField('english_level', event.target.value)
              }
              required
            >
              <option value="" disabled>
                Selecciona tu nivel
              </option>

              {ENGLISH_LEVELS.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          <div className="profile-field">
            <label htmlFor="learning-goal">Objetivo principal</label>

            <select
              id="learning-goal"
              name="learningGoal"
              value={profile.learning_goal}
              onChange={(event) =>
                updateField('learning_goal', event.target.value)
              }
              required
            >
              <option value="" disabled>
                Selecciona tu objetivo
              </option>

              {LEARNING_GOALS.map((goal) => (
                <option key={goal} value={goal}>
                  {goal}
                </option>
              ))}
            </select>
          </div>

          {errorMessage && (
            <p className="profile-message profile-message-error" role="alert">
              {errorMessage}
            </p>
          )}

          {successMessage && (
            <p
              className="profile-message profile-message-success"
              role="status"
            >
              {successMessage}
            </p>
          )}

          <button
            className={styles.saveButton}
            type="submit"
            disabled={isSaving}
          >
            {isSaving ? 'Guardando...' : 'Guardar perfil'}
          </button>

          <button
            className={styles.skipButton}
            type="button"
            onClick={() => router.push('/inicio')}
            disabled={isSaving}
          >
            Omitir cambios
          </button>
        </form>
      </section>

      <style jsx global>{`
        .pretty-picker,
        .country-picker {
          position: relative;
        }

        .pretty-picker-trigger {
          width: 100%;
          min-height: 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem 1rem;
          color: #1f322b;
          background: #ffffff;
          border: 1px solid #cfd6d2;
          border-radius: 12px;
          font: inherit;
          text-align: left;
          cursor: pointer;
        }

        .pretty-picker-trigger:hover,
        .pretty-picker-trigger:focus-visible {
          border-color: #b56f45;
          box-shadow: 0 0 0 3px rgba(181, 111, 69, 0.14);
          outline: none;
        }

        .pretty-picker-trigger.is-placeholder {
          color: #929b97;
        }

        .calendar-icon {
          color: #496473;
          font-size: 1.25rem;
        }

        .calendar-popover {
          position: absolute;
          z-index: 30;
          top: calc(100% + 0.55rem);
          left: 0;
          width: min(100%, 320px);
          padding: 0.75rem;
          background: #ffffff;
          border: 1px solid rgba(31, 50, 43, 0.14);
          border-radius: 14px;
          box-shadow: 0 18px 45px rgba(31, 50, 43, 0.18);
        }

        .calendar-header {
          display: grid;
          grid-template-columns: 32px 1fr 32px;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.65rem;
        }

        .calendar-header > button {
          width: 32px;
          height: 32px;
          display: grid;
          place-items: center;
          padding: 0;
          color: #1f322b;
          background: #f1ede5;
          border: none;
          border-radius: 8px;
          font-size: 1.3rem;
          cursor: pointer;
        }

        .calendar-header > button:hover:not(:disabled) {
          color: #ffffff;
          background: #b56f45;
        }

        .calendar-header > button:disabled {
          cursor: not-allowed;
          opacity: 0.35;
        }

        .calendar-selectors {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr;
          gap: 0.4rem;
        }

        .calendar-selectors select {
          width: 100%;
          min-height: 32px;
          padding: 0.35rem 0.45rem;
          color: #1f322b;
          background: #ffffff;
          border: 1px solid #d9dfdc;
          border-radius: 9px;
          font: inherit;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
        }

        .calendar-weekdays,
        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.2rem;
        }

        .calendar-weekdays {
          margin-bottom: 0.25rem;
        }

        .calendar-weekdays span {
          color: #77817c;
          font-size: 0.72rem;
          font-weight: 700;
          text-align: center;
        }

        .calendar-grid button,
        .calendar-empty {
          width: 30px;
          height: 30px;
          justify-self: center;
        }

        .calendar-grid button {
          display: grid;
          place-items: center;
          padding: 0;
          color: #1f322b;
          background: transparent;
          border: none;
          border-radius: 50%;
          font: inherit;
          font-size: 0.84rem;
          cursor: pointer;
        }

        .calendar-grid button:hover:not(:disabled) {
          background: #f1ede5;
        }

        .calendar-grid button.is-selected {
          color: #ffffff;
          background: #496473;
          font-weight: 700;
        }

        .calendar-grid button:disabled {
          color: #c4cac7;
          cursor: not-allowed;
        }

        .calendar-format-help {
          margin: 0.55rem 0 0;
          color: #77817c;
          font-size: 0.75rem;
          text-align: center;
        }

        .country-options {
          position: absolute;
          z-index: 25;
          top: calc(100% + 0.45rem);
          right: 0;
          left: 0;
          max-height: 230px;
          overflow-y: auto;
          padding: 0.4rem;
          background: #ffffff;
          border: 1px solid rgba(31, 50, 43, 0.14);
          border-radius: 12px;
          box-shadow: 0 14px 35px rgba(31, 50, 43, 0.16);
        }

        .country-options button {
          width: 100%;
          display: block;
          padding: 0.72rem 0.8rem;
          color: #1f322b;
          background: transparent;
          border: none;
          border-radius: 8px;
          font: inherit;
          text-align: left;
          cursor: pointer;
        }

        .country-options button:hover,
        .country-options button[aria-selected='true'] {
          color: #1f322b;
          background: #f1ede5;
        }

        .country-options p {
          margin: 0;
          padding: 0.75rem;
          color: #77817c;
          font-size: 0.85rem;
        }

        @media (max-width: 600px) {
          .calendar-popover {
            width: 100%;
          }

          .calendar-selectors {
            grid-template-columns: 1fr 0.72fr;
          }
        }
      `}</style>
    </main>
  );
}