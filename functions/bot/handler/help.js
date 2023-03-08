const response = require('./response/static/help');

module.exports = (ctx) => ctx.reply(...response);
