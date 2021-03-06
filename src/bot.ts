import { Telegraf } from 'Telegraf'
import { InlineQueryResult } from 'typegram'
import dotenv from 'dotenv'

dotenv.config()

const bot = new Telegraf(process.env.TOKEN)

bot.start((ctx) =>
  ctx.reply('Use inline mode to send gooz sounds to your chats')
)
bot.help((ctx) => ctx.reply('💨'))

bot.on('callback_query', (ctx) => {
  ctx.telegram.answerCbQuery(ctx.callbackQuery.id)
})

bot.on('inline_query', (ctx) => {
  console.log(ctx.inlineQuery.query)
})

console.log('Starting Gooz bot...')
bot.launch()
