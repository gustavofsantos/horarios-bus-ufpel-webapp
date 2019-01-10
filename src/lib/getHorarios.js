const url = 'https://raw.githubusercontent.com/gustavofsantos/horarios-onibus-institucional-ufpel/master/horarios.json';

export default async function getHorarios() {
  const horarios = localStorage.getItem('horarios-onibus-ufpel');

  if (!horarios) {
    try {
      const response = await fetch(url);
      const content = await response.json();

      localStorage.setItem('horarios-onibus-ufpel', JSON.stringify(content));

      return content;
    } catch (e) {
      console.error(e);
      throw e;
    }
  } else {
    return JSON.parse(horarios);
  }
}