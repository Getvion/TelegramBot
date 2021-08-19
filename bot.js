const {
   Telegraf
} = require('telegraf');
require('dotenv').config();
const text = require('./const');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply(`Привет, ${ctx.message.from.first_name}`));
bot.help((ctx) => ctx.reply(text.commands));


bot.command('pohui', (ctx) => {
   try {
      ctx.replyWithVoice('AwACAgIAAxkBAAPIYR6rdYzkgKylQL5qzv-GLSIehXIAAhcGAAKyvVlJa5htnNkD7dsgBA');
   } catch (e) {
      console.error(e);
   }
});
bot.command('pohui2', (ctx) => {
   try {
      ctx.replyWithVoice('AwACAgIAAxkBAAPLYR6sYnRcBdQSiFWOuTSCKgRihB4AAn8GAALEuihJR8_bLfLitpUgBA');
   } catch (e) {
      console.error(e);
   }
});
bot.command('stop', (ctx) => {
   try {
      ctx.replyWithVoice('AwACAgIAAxkBAAPOYR6sjvHy0HraVdVQHUaHQwj21WoAAi0AA7xESEiHGJqqX_KK6SAE');
   } catch (e) {
      console.error(e);
   }
});

bot.launch();

// npm run dev - запуск сервера