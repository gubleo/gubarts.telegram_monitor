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


Capturar o Bot Token e Chat ID no Telegram envolve a interação com o BotFather no Telegram e algumas etapas específicas. Aqui estão as instruções detalhadas:

# Obtendo o Token do Bot

*Converse com o BotFather:*

No Telegram, pesquise por "BotFather" e inicie uma conversa com ele.

Use o comando */newbot* para criar um novo bot. O BotFather irá guiá-lo através do processo, solicitando que você escolha um nome para o bot e, em seguida, um username único que termine com "bot". Ao concluir, o BotFather fornecerá um Token do Bot.
Copie o Token do Bot:

Copie o Token do Bot fornecido pelo BotFather. Este é um código alfanumérico longo que será usado para autenticar seu bot ao se conectar à API do Telegram.
Obtendo o Chat ID

*Converse com o seu Bot:*

Depois de criar o bot, inicie uma conversa com ele. Você pode procurar pelo nome do seu bot na barra de pesquisa do Telegram e clicar em "Iniciar" ou enviar uma mensagem para o bot.

*Obtendo o Chat ID:*

Uma vez que você iniciou uma conversa com o bot, você precisa obter o ID do chat. Isso pode ser feito usando o seguinte passo:

Navegue até o seguinte URL no seu navegador, substituindo <seu_bot_token> pelo Token do seu bot: https://api.telegram.org/bot<seu_bot_token>/getUpdates

Você receberá um JSON que contém informações sobre as atualizações no bot. Procure o valor do campo "id" na seção "chat" para o chat que você acabou de iniciar com o bot. Esse valor é o Chat ID.

*Chat ID Alternativo (método mais direto):*

Outra opção mais direta é usar um bot temporário como o @userinfobot. Basta iniciar uma conversa com @userinfobot e ele fornecerá o seu Chat ID.

Lembre-se de que o Chat ID pode mudar se você excluir a conversa com o bot e iniciar uma nova. Se precisar de um Chat ID constante, mantenha uma conversa ativa com o bot ou use um método mais direto, como @userinfobot.

Ao concluir essas etapas, você terá tanto o Token do Bot quanto o Chat ID necessários para configurar o seu script no Node.js. Certifique-se de manter essas informações seguras e não compartilhá-las publicamente, pois o Token do Bot é como uma senha para o seu bot.


# Dúvidas?

Entre em contato comigo por DM em meu Instagram! https://instagram.com/gubarts
