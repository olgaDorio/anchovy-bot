const { Telegraf } = require('telegraf');
const onStart = require('./handler/start');
const onMessage = require('./handler/message');
const onHistory = require('./handler/history');
const onHelp = require('./handler/help');
const onAsk = require('./handler/ask');
const onHistoryAll = require('./handler/historyAll');
const onAskAll = require('./handler/askAll');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start(onStart);

bot.command('help', onHelp);

bot.command('history', onHistory);
bot.command('ask', onAsk);

bot.command('historyall', onHistoryAll);
bot.command('askall', onAskAll);

bot.on('message', onMessage);

bot.launch();

exports.handler = async (event) => {
  try {
    await bot.handleUpdate(JSON.parse(event.body));
    return { statusCode: 200, body: '' };
  } catch (error) {
    console.error(error);
    return { statusCode: 400, body: 'This endpoint is meant for bot and telegram communication' };
  }
};

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
