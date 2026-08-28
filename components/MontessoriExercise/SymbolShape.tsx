export const SYMBOL_COLORS: Record<string, string> = {
  red: '#d74b4b',
  black: '#30363a',
  blue: '#4169a8',
  'light-blue': '#77a9d4',
  purple: '#80599e',
  green: '#4f8c67',
  pink: '#c97891',
  orange: '#d98243',
  yellow: '#d6aa36',
};

export type SymbolShapeInput = {
  shape: string;
  color: string;
};

export default function SymbolShape({ shape, color }: SymbolShapeInput) {
  const resolvedColor = SYMBOL_COLORS[color] ?? '#30363a';
  const normalizedShape = String(shape);

  if (normalizedShape.includes('triangle')) {
    const isSmall = normalizedShape.includes('small');

    return (
      <span
        aria-hidden="true"
        style={{
          width: 0,
          height: 0,
          borderLeft: `${isSmall ? 13 : 19}px solid transparent`,
          borderRight: `${isSmall ? 13 : 19}px solid transparent`,
          borderBottom: `${isSmall ? 23 : 34}px solid ${resolvedColor}`,
        }}
      />
    );
  }

  if (normalizedShape === 'bar') {
    return (
      <span
        aria-hidden="true"
        style={{
          width: '38px',
          height: '10px',
          background: resolvedColor,
          borderRadius: '999px',
        }}
      />
    );
  }

  if (normalizedShape === 'crescent') {
    return (
      <span
        aria-hidden="true"
        style={{
          position: 'relative',
          width: '38px',
          height: '38px',
          overflow: 'hidden',
          borderRadius: '50%',
          background: resolvedColor,
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '7px',
            left: '7px',
            width: '34px',
            height: '34px',
            background: 'var(--surface-solid)',
            borderRadius: '50%',
          }}
        />
      </span>
    );
  }

  if (normalizedShape === 'keyhole') {
    return (
      <span
        aria-hidden="true"
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '30px',
          height: '38px',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 0,
            left: '5px',
            width: '20px',
            height: '20px',
            background: resolvedColor,
            borderRadius: '50%',
          }}
        />
        <span
          style={{
            position: 'absolute',
            bottom: 0,
            left: '9px',
            width: '12px',
            height: '23px',
            background: resolvedColor,
            borderRadius: '3px',
          }}
        />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      style={{
        width: normalizedShape.includes('small') ? '22px' : '38px',
        height: normalizedShape.includes('small') ? '22px' : '38px',
        background: resolvedColor,
        borderRadius: '50%',
      }}
    />
  );
}
