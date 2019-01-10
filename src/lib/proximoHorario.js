export default function proximoHorario(horarios) {
  const agora = new Date();
  console.log('agora: ', agora);
  const horaAgora = agora.getHours();
  const minutosAgora = agora.getMinutes();

  for (let i = 0; i < horarios.length; i++) {
    const [shoras, sminutos] = horarios[i].horario.split(':');
    const nhoras = parseInt(shoras);
    const nminutos = parseInt(sminutos);

    console.log('nhoras ', nhoras);
    console.log('nminutos ', nminutos);
    if (nhoras === horaAgora && nminutos >= minutosAgora) {
      return horarios[i];
    } else if (nhoras > horaAgora) {
      return horarios[i];
    }
  }

  return null;
}