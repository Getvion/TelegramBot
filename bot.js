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
      ctx.reply('Боже, ну как же похуй! Просто АБ-СО-ЛЮТ-НО!');
      // ctx.replyWithVoice('./voiceMsgs/pohui1.ogg'); - вот тут должен отправлять голосовое
   } catch (e) {
      console.error(e);
   }
});
bot.command('pohui2', (ctx) => {
   try {
      ctx.reply('Типы, мне реально похуй на этого типа, я его даже не видел ни разу. ');
      // ctx.replyWithVoice('./voiceMsgs/pohui2.ogg'); - вот тут должен отправлять голосовое
   } catch (e) {
      console.error(e);
   }
});
bot.command('stop', (ctx) => {
   try {
      ctx.reply('Блять, ёбаный черт, просто остановись, пожалуйста! Не пиши этой хуеты, мне стыдно читать это говно.');
      // ctx.replyWithVoice('./voiceMsgs/stop.ogg'); - вот тут должен отправлять голосовое
   } catch (e) {
      console.error(e);
   }
});

bot.launch();
