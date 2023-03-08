const { create, getById } = require('../components/fauna');
const { getUser } = require('../components/mapper');
const response = require('./response/static/start');
const generateFailureResponse = require('./response/dynamic/start');

module.exports = (ctx) => {
  const { id, isBot, name } = getUser(ctx.from);

  if (isBot) {
    return ctx.reply('Sorry I only interact with humans!');
  }

  return getById(id)
    .catch(() => create({ id, name }))
    .then(() => ctx.reply(...response))
    .catch((error) => ctx.reply(...generateFailureResponse(error)));
};
