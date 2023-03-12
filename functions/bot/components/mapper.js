/* eslint-disable camelcase */

const getUser = ({
  id, is_bot, first_name, last_name, username,
}) => ({
  id,
  isBot: is_bot,
  name: [first_name, last_name, username].filter(Boolean).join(' ') || id,
});

const getMessage = ({ from, date, text }) => ({
  id: from.id,
  timestamp: new Date(date * 1000).toISOString(),
  text,
});

module.exports = {
  getUser,
  getMessage,
};
