const { Markup } = require('telegraf');

module.exports = [
  'Что Вы сейчас делаете?',

  Markup.keyboard([
    ['🔍 Search', '😎 Popular'],
    ['☸ Setting', '📞 Feedback'],
    ['📢 Ads', '⭐️ Rate us', '👥 Share'],
  ]).resize(),
];
