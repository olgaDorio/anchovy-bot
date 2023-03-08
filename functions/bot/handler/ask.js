const response = require('./response/static/ask');

module.exports = (ctx) => ctx.reply(...response);
