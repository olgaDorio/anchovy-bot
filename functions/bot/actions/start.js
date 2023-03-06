const { newUser} = require('../components/fauna')
const { getUser } = require('../components/helper')

module.exports = async (ctx) => {
  const { id, isBot, name } = getUser(ctx.from)

  if (isBot) {
    return ctx.reply(`Sorry I only interact with humans!`)
  }

  try {
    const isNewUser = await newUser(id)
    const message = isNewUser ? `Added ${name} to db!` : `${name} is already inside db!`
    return ctx.reply(message)
  } catch (e) {
    return ctx.reply(`Error occured`)
  }
}
