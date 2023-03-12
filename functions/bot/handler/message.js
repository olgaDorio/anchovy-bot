const { getAll, appendResponse } = require('../components/fauna');
const { getMessage } = require('../components/mapper');
const staticResponses = require('./response/static/message');
const dynamicResponses = require('./response/dynamic/message');

module.exports = (ctx) => {
  if (ctx.message.text) {
    return appendResponse(getMessage(ctx.message))
      .then(() => ctx.reply(...staticResponses.saved))
      .catch((error) => ctx.reply(...dynamicResponses.generateFailureResponse(error)));
  }

  let admin = null;

  return getAll()
    .then((allUsers) => {
      admin = allUsers.find((u) => u.isAdmin);
    })
    .then(() => (
      admin
        ? ctx.telegram.forwardMessage(admin.id, ctx.chat.id, ctx.message.message_id)
        : Promise.resolve()
    ))
    .then(() => ctx.reply(...(
      admin
        ? dynamicResponses.generateForwardedResponse(admin)
        : staticResponses.adminIsMissing
    )))
    .catch((error) => ctx.reply(...dynamicResponses.generateFailureResponse(error)));
};
