'use client';

import { FormEvent, useEffect, useState } from 'react';

import { createClient } from '@/lib/supabase/client';

import styles from './ProfileCompletionCard.module.css';

type ProfileForm = {
  full_name: string;
  birth_date: string;
  country: string;
  gender: string;
  english_level: string;
  learning_goal: string;
};

const EMPTY_PROFILE: ProfileForm = {
  full_name: '',
  birth_date: '',
  country: '',
  gender: '',
  english_level: '',
  learning_goal: '',
};

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'No lo sé'];
const GOALS = [
  'Conversar con confianza',
  'Conseguir empleo o crecer profesionalmente',
  'Viajar y comunicarme con facilidad',
  'Estudiar o prepararme académicamente',
  'Mejorar mi inglés general',
];

function getMaximumBirthDate() {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 18);
  return date.toISOString().slice(0, 10);
}

function isComplete(profile: Partial<ProfileForm> | null) {
  return Boolean(
    profile?.full_name?.trim() &&
      profile.birth_date &&
      profile.country?.trim() &&
      profile.gender &&
      profile.english_level &&
      profile.learning_goal,
  );
}

export default function ProfileCompletionCard({
  onCompleted,
}: {
  onCompleted?: (firstName: string) => void;
}) {
  const [userId, setUserId] = useState<string | null>(null);
  const [profile, setProfile] = useState<ProfileForm>(EMPTY_PROFILE);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadProfile() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setIsLoading(false);
        return;
      }

      setUserId(user.id);

      const { data } = await supabase
        .from('profiles')
        .select('full_name, birth_date, country, gender, english_level, learning_goal')
        .eq('id', user.id)
        .maybeSingle();

      if (isComplete(data)) {
        setIsProfileComplete(true);
      } else {
        setProfile({
          full_name:
            data?.full_name ??
            user.user_metadata?.full_name ??
            user.user_metadata?.name ??
            '',
          birth_date: data?.birth_date ?? '',
          country: data?.country ?? '',
          gender: data?.gender ?? '',
          english_level: data?.english_level ?? '',
          learning_goal: data?.learning_goal ?? '',
        });
      }

      setIsLoading(false);
    }

    void loadProfile();
  }, []);

  function updateField(field: keyof ProfileForm, value: string) {
    setProfile((current) => ({ ...current, [field]: value }));
    setError('');
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!userId || isSaving) return;

    if (!isComplete(profile)) {
      setError('Completa todos los campos para guardar tu perfil.');
      return;
    }

    setIsSaving(true);
    setError('');

    const supabase = createClient();
    const { error: saveError } = await supabase.from('profiles').upsert(
      {
        id: userId,
        full_name: profile.full_name.trim(),
        birth_date: profile.birth_date,
        country: profile.country.trim(),
        gender: profile.gender,
        english_level: profile.english_level,
        learning_goal: profile.learning_goal,
      },
      { onConflict: 'id' },
    );

    setIsSaving(false);

    if (saveError) {
      setError('No pudimos guardar tu perfil. Inténtalo nuevamente.');
      return;
    }

    setIsProfileComplete(true);
    onCompleted?.(profile.full_name.trim().split(/\s+/)[0] ?? '');
  }

  if (isLoading || isProfileComplete) return null;

  return (
    <section id="completar-perfil" className={styles.card} aria-labelledby="profile-card-title">
      <div className={styles.heading}>
        <div>
          <p>UN ÚLTIMO DETALLE</p>
          <h2 id="profile-card-title">Completa tu perfil cuando puedas</h2>
        </div>
        <span>No bloquea tus compras</span>
      </div>

      <p className={styles.description}>
        Ya puedes usar tu cuenta. Estos datos nos ayudan a personalizar tu experiencia.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          <span>Nombre completo</span>
          <input value={profile.full_name} onChange={(event) => updateField('full_name', event.target.value)} autoComplete="name" required />
        </label>
        <label>
          <span>Fecha de nacimiento</span>
          <input type="date" max={getMaximumBirthDate()} value={profile.birth_date} onChange={(event) => updateField('birth_date', event.target.value)} required />
        </label>
        <label>
          <span>País</span>
          <input value={profile.country} onChange={(event) => updateField('country', event.target.value)} autoComplete="country-name" placeholder="República Dominicana" required />
        </label>
        <label>
          <span>Género</span>
          <select value={profile.gender} onChange={(event) => updateField('gender', event.target.value)} required>
            <option value="">Selecciona una opción</option>
            <option>Femenino</option>
            <option>Masculino</option>
            <option>Prefiero no decirlo</option>
          </select>
        </label>
        <label>
          <span>Nivel de inglés</span>
          <select value={profile.english_level} onChange={(event) => updateField('english_level', event.target.value)} required>
            <option value="">Selecciona tu nivel</option>
            {LEVELS.map((level) => <option key={level}>{level}</option>)}
          </select>
        </label>
        <label>
          <span>Objetivo principal</span>
          <select value={profile.learning_goal} onChange={(event) => updateField('learning_goal', event.target.value)} required>
            <option value="">Selecciona tu objetivo</option>
            {GOALS.map((goal) => <option key={goal}>{goal}</option>)}
          </select>
        </label>

        <button type="submit" disabled={isSaving}>
          {isSaving ? 'Guardando…' : 'Guardar mi perfil'}
        </button>
      </form>

      {error ? <p className={styles.error} role="alert">{error}</p> : null}
    </section>
  );
}
