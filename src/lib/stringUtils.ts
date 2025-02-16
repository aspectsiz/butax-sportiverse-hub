// src/lib/stringUtils.ts
export const toEnglishCharacters = (text: string): string => {
  const turkishCharacters: { [key: string]: string } = {
    'ç': 'c', 'Ç': 'C',
    'ğ': 'g', 'Ğ': 'G',
    'ı': 'i', 'İ': 'I',
    'ö': 'o', 'Ö': 'O',
    'ş': 's', 'Ş': 'S',
    'ü': 'u', 'Ü': 'U'
  };

  return text
    .split('')
    .map(char => turkishCharacters[char] || char)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-');
};