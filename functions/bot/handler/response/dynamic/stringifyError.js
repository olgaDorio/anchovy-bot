module.exports = ({ userFriendlyMessage, error }) => [
  userFriendlyMessage, '\nmessage:', error.message, '\nstack:', error.stack,
].join('\n');
