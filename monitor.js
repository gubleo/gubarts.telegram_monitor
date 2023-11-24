const ping = require('ping');
const TelegramBot = require('node-telegram-bot-api');

// Configurações do Telegram
const botToken = 'SEU_TOKEN_DO_BOT'; // Adicione o token do seu bot aqui
const chatId = 'ChatID_SEM_ASPAS'; // Substitua pelo ID do seu grupo

// Configurações do equipamento
const equipmentList = [
  { ip: '192.168.0.2', name: 'DVR1' },
  // Adicione mais equipamentos conforme necessário
];

// Função para verificar a conexão do equipamento
async function checkConnection(ip, name, bot) {
  const res = await ping.promise.probe(ip);

  if (!res.alive) {
    const message = `❌ Equipamento ${name} (${ip}) está fora do ar!`;

    // Enviar mensagem para o grupo no Telegram
    bot.sendMessage(chatId, message);
    console.log(message);
  }
}

// Configurar o bot do Telegram
const bot = new TelegramBot(botToken, { polling: true });

// Loop para verificar a conexão de cada equipamento
setInterval(() => {
  for (const equipment of equipmentList) {
    checkConnection(equipment.ip, equipment.name, bot);
  }
}, 60000); // Verifica a cada 1 minuto
