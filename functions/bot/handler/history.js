const { getById } = require('../components/fauna');
const {
  generateSuccessResponse,
  generateFailureResponse,
} = require('./response/dynamic/history');

module.exports = (ctx) => getById(ctx.update.message.text.match(/\d+/)?.[0] || ctx.message.from.id)
  .then(({ data }) => ctx.reply(...generateSuccessResponse(data)))
  .catch((error) => ctx.reply(...generateFailureResponse(error)));
