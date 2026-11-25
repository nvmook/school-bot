// Points Telegram at the Vercel deployment.
// Usage: npm run set-webhook -- https://<your-project>.vercel.app
import { bot } from "../src/bot.js";

const baseUrl = process.argv[2];
if (!baseUrl) {
  console.error("Usage: npm run set-webhook -- https://<your-project>.vercel.app");
  process.exit(1);
}

const url = new URL("/api/bot", baseUrl).toString();

await bot.api.setWebhook(url, {
  secret_token: process.env.WEBHOOK_SECRET || undefined,
  drop_pending_updates: true,
});

console.log(`✅ Webhook set to ${url}`);
console.log(await bot.api.getWebhookInfo());
