import { Bot } from "grammy";

const token = process.env.BOT_TOKEN;
if (!token) {
  throw new Error("BOT_TOKEN is not set. Copy .env.example to .env and fill it in.");
}

export const bot = new Bot(token);

bot.command("start", (ctx) =>
  ctx.reply(
    `Привет, ${ctx.from?.first_name ?? "друг"}! 👋\n\n` +
      "Я тестовая версия школьного бота. Скоро здесь появится много интересного 😉\n\n" +
      "Команды:\n/ping — проверить, что я жив",
  ),
);

bot.command("ping", (ctx) => ctx.reply("🏓 pong"));

bot.on("message:text", (ctx) => ctx.reply(`Ты написал: ${ctx.message.text}`));

bot.catch((err) => {
  console.error(`Error while handling update ${err.ctx.update.update_id}:`, err.error);
});
