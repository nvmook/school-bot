// Vercel serverless function: Telegram sends updates here via webhook.
// URL: https://<your-project>.vercel.app/api/bot
import { webhookCallback } from "grammy";
import { bot } from "../src/bot.js";

const handleUpdate = webhookCallback(bot, "std/http", {
  secretToken: process.env.WEBHOOK_SECRET || undefined,
});

export async function POST(request: Request): Promise<Response> {
  return handleUpdate(request);
}

export function GET(): Response {
  return new Response("School bot webhook is up ✅");
}
