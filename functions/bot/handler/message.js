const { appendResponse } = require('../components/fauna');
const { getMessage } = require('../components/mapper');
const response = require('./response/static/message');
const generateFailureResponse = require('./response/dynamic/message');

module.exports = (ctx) => (
  appendResponse(getMessage(ctx.message))
    .then(() => ctx.reply(...response))
    .catch((error) => ctx.reply(...generateFailureResponse(error)))
);
