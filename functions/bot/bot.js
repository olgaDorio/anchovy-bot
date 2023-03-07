const { Telegraf } = require('telegraf');
const startAction = require('./actions/start')

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start(startAction)

bot.command('oldschool', (ctx) => ctx.reply('Hello'));
bot.command('modern', (ctx) => ctx.reply('Yo'));


let latest =''

bot.command('poll', async (ctx) => {
  return new Promise((resolve, reject) => {
    ctx.replyWithPoll('my question', ['вариант 1', 'вариант 2', 'вариант 3', 'здесь нет нужного варианта, напишу руками'])
      .then((response) => {latest = JSON.stringify(response); resolve();})
      .catch(reject)
  })
})

bot.command('pollres', (ctx) => ctx.reply(latest));

exports.handler = async event => {
  try {
    await bot.handleUpdate(JSON.parse(event.body));
    return { statusCode: 200, body: '' };
  } catch (e) {
    console.log(e)
    return { statusCode: 400, body: 'This endpoint is meant for bot and telegram communication' };
  }
}

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
