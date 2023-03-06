exports.getUser = info => {
  const { id, is_bot, first_name, last_name } = info
  const name = [first_name, last_name].join(' ')
  return { id, isBot: is_bot, name }
}
