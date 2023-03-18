const stringifyError = require('./stringifyError');

const generateSuccessResponse = (user) => [
  `${new Date().toISOString()}: Отправлено сообщение ${user.name}`,
];

const generateFailureResponse = (user, error) => [
  stringifyError({
    userFriendlyMessage: [
      `${new Date().toISOString()}: Не удалось отправить сообщение ${user.name}`,
    ].join('\n'),
    error,
  }),
];

module.exports = {
  generateSuccessResponse,
  generateFailureResponse,
};
