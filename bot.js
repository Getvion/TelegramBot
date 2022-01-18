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
  pohui: [/(похуй)/gi],
  nigger: [/(нигер)/gi, /(нига)/gi],
};

let niggerWord = {
  n: 'CgACAgQAAxkBAAIDdWHloW1klWAEWjvL4qtT9TdP2efnAAJPAgACfguEUrYImf33KDf0IwQ',
  i: 'CgACAgQAAxkBAAIDdmHloXp_uGE7RJ-ajBGOzyUTCZ0cAAIZAwACA-q1UvAYQCb4jeUBIwQ',
  g: 'CgACAgQAAxkBAAIDd2HloZK7SODgZSicWRhSEEYrTj5jAAIuAgACF9qUUjtT3a4PHlIsIwQ',
  e: 'CgACAgQAAxkBAAIDeGHlokeI6jPA7FEHYzhu5OnVUZFaAAI-AgACc3GUUs4kbycYydpGIwQ',
  r: 'CgACAgQAAxkBAAIDeWHlonRjBV--E-cvLIWaigoBdpEtAAJAAgACWmCVUuIZ6R3YTtuOIwQ',
};

// Команды боту
bot.start((ctx) => ctx.reply(`Привет, ${ctx.message.from.first_name}`));
bot.help((ctx) => ctx.reply(commands));

// Реакция на триггеры
bot.hears(botTrigger.pohui, (ctx) => {
  ctx.replyWithVoice('AwACAgIAAxkBAAPIYR6rdYzkgKylQL5qzv-GLSIehXIAAhcGAAKyvVlJa5htnNkD7dsgBA');
});

bot.hears(botTrigger.nigger, (ctx) => {
  const writeLetter = (letter, delay) => {
    setTimeout(() => {
      ctx.replyWithAnimation(letter);
    }, delay);
  };

  writeLetter(niggerWord.n, 0);
  writeLetter(niggerWord.i, 100);
  writeLetter(niggerWord.g, 200);
  writeLetter(niggerWord.g, 300);
  writeLetter(niggerWord.e, 400);
  writeLetter(niggerWord.r, 500);
});

// Вывод в консоль id сообщения для удобства добавления новых сообщений
bot.on('message', (ctx) => {
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
