function atualizarRelogio() {
    const agora = new Date();

    const horarioBrasilia = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).formatToParts(agora);

    const horas = horarioBrasilia.find(
        parte => parte.type === 'hour'
    ).value;

    const minutos = horarioBrasilia.find(
        parte => parte.type === 'minute'
    ).value;

    const segundos = horarioBrasilia.find(
        parte => parte.type === 'second'
    ).value;

    document.getElementById('hours').textContent = horas;
    document.getElementById('minutes').textContent = minutos;
    document.getElementById('seconds').textContent = segundos;
}

atualizarRelogio();

setInterval(atualizarRelogio, 1000);