// Vercel serverless function: Telegram sends updates here via webhook.
// URL: https://<your-project>.vercel.app/api/bot
import { webhookCallback } from "grammy";
import { bot } from "../src/bot.js";

const handleUpdate = webhookCallback(bot, "std/http", {
  secretToken: process.env.WEBHOOK_SECRET || undefined,
});

export async function POST(request) {
  return handleUpdate(request);
}

export function GET() {
  return new Response("School bot webhook is up ✅");
}
