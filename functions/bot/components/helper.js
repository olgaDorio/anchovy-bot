exports.getUser = info => {
  const { id, is_bot: isBot, first_name: firstName, username: username } = info
  const name = (firstName ? firstName : '' + ' ' + username ? username : '').trim()
  return { id, isBot, name: JSON.stringify(info) }
}
