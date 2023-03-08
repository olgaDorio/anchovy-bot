const { getAll } = require('../components/fauna');
const {
  generateSuccessResponse,
  generateFailureResponse,
} = require('./response/dynamic/history');

module.exports = (ctx) => getAll()
  .then((users) => {
    const msg = users
      .map((user) => generateSuccessResponse(user)[0])
      .join('\n\n');

    return ctx.reply(msg, {
      parse_mode: 'HTML',
    });
  })
  .catch((error) => ctx.reply(...generateFailureResponse(error)));
