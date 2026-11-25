// Local development: runs the bot with long polling (no Vercel needed).
// Usage: npm run dev
import { bot } from "../src/bot.js";

// Polling and webhook can't work at the same time, so drop the webhook first.
await bot.api.deleteWebhook();

await bot.start({
  onStart: (me) => console.log(`🤖 @${me.username} is running (polling). Press Ctrl+C to stop.`),
});
