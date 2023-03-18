const { getAll } = require('../components/fauna');
const askResponse = require('./response/static/ask');
const askAllResponse = require('./response/static/askAll');
const {
  generateSuccessResponse,
  generateFailureResponse,
} = require('./response/dynamic/askAll');

const notifyOthers = (ctx) => {
  getAll()
    .then((users) => {
      const initiatorId = ctx.update.message.from.id;

      users.forEach((user) => {
        if (user.id === initiatorId) {
          return;
        }

        ctx.telegram.sendMessage(user.id, ...askResponse)
          .then(() => (
            ctx.telegram.sendMessage(initiatorId, ...generateSuccessResponse(user))
          ))
          .catch((error) => (
            ctx.telegram.sendMessage(initiatorId, ...generateFailureResponse(user, error))
          ))
          .catch(console.error);
      });
    })
    .catch(console.error);
};

module.exports = (ctx) => {
  notifyOthers(ctx);
  return ctx.reply(...askAllResponse);
};
