export const lessonTitles: Record<
  string,
  Record<number, string>
> = {
  a0: {
    1: 'Presentarte: I am / My name is',
    2: 'Contracciones: I’m / My name’s',

    3: 'A, H, J, K: familia /eɪ/',
    4: 'E, P, G, D: primera familia /iː/',
    5: 'B, C, T, V, Z: segunda familia /iː/',
    6: 'L, M, N: contraste auditivo',
    7: 'F, S, X: familia con vocal /e/',
    8: 'I y Y: contraste y sonido final /aɪ/',
    9: 'Q, U y W: nombres con /juː/',
    10: 'O y R: letras especiales',
    11: 'Alfabeto completo A–Z',
    12: 'Letras fáciles de confundir: B/D/P/T',
    13: 'Letras fáciles de confundir: E/I/G/J',
    14: 'Dictado de letras aisladas',

    15: 'A corta y A larga: cat/cake',
    16: 'E corta y E larga: bed/he',
    17: 'I corta y I larga: sit/five',
    18: 'O corta y O larga: hot/home',
    19: 'U corta y U larga: cup/cute',
    20: 'Comparación de las cinco vocales cortas',
    21: 'Comparación de las cinco vocales largas',
    22: 'Identificar vocal corta o larga al escuchar',

    23: 'How do you spell it?',
    24: 'Deletrear el nombre',
    25: 'Deletrear el apellido',
    26: 'Mayúsculas y minúsculas',
    27: '@ = at y . = dot',
    28: 'Decir un correo electrónico',
    29: 'B as in book: confirmar una letra',
    30: 'Sorry, D, not B: corregir una letra',
    31: 'Dictado de nombres y correos',

    32: 'Hello y Hi',
    33: 'Good morning',
    34: 'Good afternoon y Good evening',
    35: 'Goodbye, Bye y See you',
    36: 'How are you?',
    37: 'I’m fine / good / tired',
    38: 'Please',
    39: 'Thank you / You’re welcome',
    40: 'Sorry',
    41: 'Excuse me',
    42: 'Yes y No',
    43: 'Mini diálogo de saludo',

    44: 'Listen y Repeat',
    45: 'Read y Write',
    46: 'Look y Choose',
    47: 'Match y Complete',
    48: 'Open y Close',
    49: 'I don’t understand',
    50: 'Can you repeat, please?',
    51: 'Can you speak slowly, please?',
    52: 'What does ___ mean?',
    53: 'Correct / Incorrect / Try again',

    54: 'Números 0–5',
    55: 'Números 6–10',
    56: 'Números 11–15',
    57: 'Números 16–20',
    58: 'Dictado de números 0–20',
    59: 'How old are you? como fórmula',
    60: 'I am ___ years old como fórmula',
    61: 'Decir un número de teléfono lentamente',
    62: 'Escuchar un número de teléfono',

    63: 'Colores primarios',
    64: 'Colores básicos adicionales',
    65: 'Circle, square y triangle',
    66: 'Big y small',
    67: 'Book, notebook, pen y pencil',
    68: 'Chair, table, door y window',
    69: 'This is… como fórmula',
    70: 'It is… como fórmula',
    71: 'A blue book: color + objeto',
    72: 'Reconocer objetos mediante instrucciones',

    73: 'Repaso del alfabeto por sonidos',
    74: 'Repaso de vocales cortas y largas',
    75: 'Repaso de frases de cortesía',
    76: 'Repaso de instrucciones',
    77: 'Repaso de números y datos',
    78: 'Comprensión auditiva A0',
    79: 'Lectura visual A0',
    80: 'Presentación final de 30–45 segundos',
  },
};

export function getLessonTitle(
  level: string,
  lessonNumber: number,
) {
  return (
    lessonTitles[level.toLowerCase()]?.[lessonNumber] ??
    `Lección ${lessonNumber}`
  );
}