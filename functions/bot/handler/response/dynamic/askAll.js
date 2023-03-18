const stringifyError = require('./stringifyError');

const generateSuccessResponse = (user) => [
  `Отправлено сообщение ${user.name}`,
];

const generateFailureResponse = (user, error) => [
  stringifyError({
    userFriendlyMessage: [
      `Не удалось отправить сообщение ${user.name}`,
    ].join('\n'),
    error,
  }),
];

module.exports = {
  generateSuccessResponse,
  generateFailureResponse,
};
