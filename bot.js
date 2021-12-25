const { Telegraf } = require('telegraf');
require('dotenv').config();

const commands = `
/start - Бот поздоровается ;-)
/help - Помощь
/pohui - Боже, ну как же похуй!
/pohui2 -  Мне реально похуй на этого типа.
/stop - Ёбаный черт, просто остановись!
`;

const bot = new Telegraf(process.env.BOT_TOKEN);

let botTrigger = {
  pohui: [/(похуй)/g],
};

let dataArray = [];

// Команды боту
bot.start((ctx) => ctx.reply(`Привет, ${ctx.message.from.first_name}`));
bot.help((ctx) => ctx.reply(commands));

// Реакция на триггер
bot.hears(botTrigger.pohui, (ctx) => {
  ctx.replyWithVoice('AwACAgIAAxkBAAPIYR6rdYzkgKylQL5qzv-GLSIehXIAAhcGAAKyvVlJa5htnNkD7dsgBA');
});

// Вывод в консоль id сообщения для удобства добавления новых сообщений
bot.on('voice', (ctx) => {
  return console.log(ctx.update.message.voice);
});

// Команды боту
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
