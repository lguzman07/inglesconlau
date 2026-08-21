import fs from 'node:fs';
import path from 'node:path';

const lessonsRoot = path.join(
  process.cwd(),
  'content',
  'lecciones',
);

const outputPath = path.join(
  lessonsRoot,
  'generated.ts',
);

const ignoredFiles = new Set([
  'index.ts',
  'types.ts',
  'catalog.ts',
  'generated.ts',
]);

function getLessonFiles(directory) {
  const entries = fs.readdirSync(directory, {
    withFileTypes: true,
  });

  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(
      directory,
      entry.name,
    );

    if (entry.isDirectory()) {
      files.push(
        ...getLessonFiles(fullPath),
      );

      continue;
    }

    if (
      !entry.isFile() ||
      !entry.name.endsWith('.ts') ||
      ignoredFiles.has(entry.name)
    ) {
      continue;
    }

    files.push(fullPath);
  }

  return files;
}

const files = getLessonFiles(
  lessonsRoot,
).sort();

const lessons = files
  .map((filePath) => {
    const relativePath = path
      .relative(
        lessonsRoot,
        filePath,
      )
      .replaceAll('\\', '/')
      .replace(/\.ts$/, '');

    const parts =
      relativePath.split('/');

    if (parts.length !== 2) {
      return null;
    }

    const [level, fileName] =
      parts;

    const lessonNumber =
      Number(fileName);

    if (
      !level ||
      !Number.isInteger(
        lessonNumber,
      ) ||
      lessonNumber < 1
    ) {
      return null;
    }

    return {
      level,
      lessonNumber,
      relativePath,
    };
  })
  .filter(Boolean);

const imports = lessons
  .map(
    (lesson, index) =>
      `import lesson${index + 1} from './${lesson.relativePath}';`,
  )
  .join('\n');

const registry = lessons
  .map(
    (lesson, index) =>
      `  '${lesson.level}/${lesson.lessonNumber}': lesson${index + 1},`,
  )
  .join('\n');

const output = `/*
 * ESTE ARCHIVO SE GENERA AUTOMÁTICAMENTE.
 *
 * No lo edites manualmente.
 * Ejecuta:
 *
 * npm.cmd run generate:lessons
 */

import type { LessonContent } from './types';

${imports}

export const generatedLessons: Record<
  string,
  LessonContent
> = {
${registry}
};
`;

fs.writeFileSync(
  outputPath,
  output,
  'utf8',
);

console.log(
  `Lesson registry generated: ${lessons.length} lessons.`,
);