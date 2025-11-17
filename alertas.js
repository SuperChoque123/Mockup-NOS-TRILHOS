
const btnToggleNotificacoes = document.getElementById('toggleNotificacoes');
const btnToggleLidas = document.getElementById('toggleLidas');
const areaNotificacoes = document.querySelector('.notificacoes');

let notificacoesAtivas = localStorage.getItem('notificacoesAtivas') !== 'false';
let lidasVisiveis = localStorage.getItem('lidasVisiveis') !== 'false';
let notificacoes = [];


function criarCard(tipo, titulo, mensagem, horario) {
  const card = document.createElement('div');
  card.className = `card ${tipo}`;

  const tituloDiv = document.createElement('div');
  tituloDiv.className = 'titulo';
  tituloDiv.innerHTML = `${titulo} <span>${horario}</span>`;

  const msgDiv = document.createElement('div');
  msgDiv.className = 'mensagem';
  msgDiv.innerHTML = mensagem;

  card.appendChild(tituloDiv);
  card.appendChild(msgDiv);
  return card;
}


const notificacoesExemplo = [
  { tipo: 'notificacao', titulo: '🔔 Notificação', msg: 'Trem 5 partirá às 18:15 do Terminal Sul.' },
  { tipo: 'alerta', titulo: '⚠️ Alerta', msg: 'Alagamento em trilhos próximo à estação Norte. Atenção redobrada.' },
  { tipo: 'notificacao', titulo: '🔔 Notificação', msg: 'Atualização: Trem 3 adiantado. Novo horário: 17:20.' },
  { tipo: 'notificacao', titulo: '🔔 Notificação', msg: 'Evite horários de pico entre 17h e 19h nesta segunda-feira.' },
  { tipo: 'alerta', titulo: '⚠️ Alerta', msg: 'Interrupção temporária na Linha Verde. Em manutenção.' },
];

let indexNotificacao = 0;
function adicionarNotificacao() {
  if (indexNotificacao >= notificacoesExemplo.length) return;

  const dado = notificacoesExemplo[indexNotificacao++];
  const agora = new Date();
  const horario = agora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const card = criarCard(dado.tipo, dado.titulo, dado.msg, horario);

  notificacoes.push(card);
  aplicarVisibilidade();
  areaNotificacoes.appendChild(card);
}


function aplicarVisibilidade() {
  notificacoes.forEach((card, i) => {
    if (!notificacoesAtivas && card.classList.contains('notificacao')) {
      card.style.display = 'none';
    } else if (!lidasVisiveis && i === notificacoes.length - 1 && card.classList.contains('notificacao')) {
      card.style.display = 'none';
    } else {
      card.style.display = 'block';
    }
  });

  btnToggleNotificacoes.textContent = notificacoesAtivas ? 'Desativar 🔔' : 'Ativar 🔕';
}


btnToggleNotificacoes.addEventListener('click', () => {
  notificacoesAtivas = !notificacoesAtivas;
  localStorage.setItem('notificacoesAtivas', notificacoesAtivas);
  aplicarVisibilidade();
});

btnToggleLidas.addEventListener('click', () => {
  lidasVisiveis = !lidasVisiveis;
  localStorage.setItem('lidasVisiveis', lidasVisiveis);
  aplicarVisibilidade();
});


setInterval(adicionarNotificacao, 100000);

for (let i = 0; i < 3; i++) adicionarNotificacao();
