const stringifyError = require('./stringifyError');

module.exports = (error) => [
  stringifyError({
    userFriendlyMessage: [
      'Не удалось сохранить ответ.',
      '1. Проверьте, выполняли ли Вы команду /start, если нет, отправьте её',
      '2. Попробуйте отправить сообщение ещё раз',
      '3. Если ошибка повторится, сообщите данные о ней администратору',
    ].join('\n'),
    error,
  }),

  { reply_markup: { remove_keyboard: true } },
];
