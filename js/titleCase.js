export const toTitleCase = (frase) => {
  return frase.toLowerCase()
      .split(' ')
      .map((palabra) => {
        return palabra.replace(palabra[0], palabra[0].toUpperCase());
      })
      .join(' ');
 }
