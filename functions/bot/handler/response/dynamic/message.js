const stringifyError = require('./stringifyError');

module.exports = {
  generateFailureResponse: (error) => [
    stringifyError({
      userFriendlyMessage: [
        'Не удалось сохранить сообщение.',
        '1. Проверьте, выполняли ли Вы команду /start, если нет, отправьте её',
        '2. Попробуйте отправить сообщение ещё раз',
        '3. Если ошибка повторится, сообщите данные о ней администратору',
      ].join('\n'),
      error,
    }),
  ],

  generateForwardedResponse: (admin) => [
    `Сообщение переслано ${admin.name}`,
  ],
};
