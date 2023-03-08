const { getAll } = require('../components/fauna');
const askResponse = require('./response/static/ask');
const generateSuccessResponse = require('./response/dynamic/askAll');

module.exports = (ctx) => getAll()
  .then((users) => {
    const recipients = users.map(({ id }) => id).filter((id) => id !== ctx.update.message.from.id);

    return Promise.all([
      ctx.reply(...generateSuccessResponse(recipients)),
      ...recipients.map((id) => ctx.telegram.sendMessage(id, ...askResponse)),
    ]);
  });
