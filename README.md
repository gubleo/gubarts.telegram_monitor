# Monitor de Equipamentos com Notificação no Telegram

Este é um simples script em Node.js que monitora a conectividade de uma lista de equipamentos e envia notificações para um grupo no Telegram quando um equipamento está offline.

# Configurações Iniciais
Antes de executar o script, certifique-se de configurar as seguintes variáveis no código:

```
const botToken = 'SEU_TOKEN_DO_BOT'; // Adicione o token do seu bot do Telegram aqui
const chatId = -1001234567890; // Substitua pelo ID do seu grupo no Telegram

const equipmentList = [
  { ip: '192.168.0.2', name: 'DVR1' },
  // Adicione mais equipamentos conforme necessário
];
```


**botToken:** Token de acesso do seu bot no Telegram. Você pode obtê-lo ao criar um novo bot com o BotFather no Telegram.

**chatId:** ID do grupo no qual você deseja receber as notificações. Use o BotFather para obter o ID do grupo.

**equipmentList:** Lista de equipamentos a serem monitorados, cada um com um IP e um nome associado.

# Executando o Script
Certifique-se de ter o Node.js instalado. Execute o seguinte comando para instalar as dependências:


```npm install ping node-telegram-bot-api```

Depois, execute o script com:


```node monitor.js```

# Funcionamento
O script pingará regularmente os equipamentos na lista e enviará uma notificação ao grupo do Telegram sempre que um equipamento estiver offline.

# Observações

Certifique-se de que a tabela no banco de dados **(api.telegram_chamados_detalhados)** contém os campos necessários e tenha a coluna monitor_telegram para filtrar os equipamentos.

Ajuste os intervalos e mensagens conforme necessário para atender aos requisitos específicos do seu ambiente.

Esse script é um ponto de partida e pode ser expandido ou personalizado conforme suas necessidades.

# Dúvidas?

Entre em contato comigo por DM em meu Instagram! https://instagram.com/gubarts
