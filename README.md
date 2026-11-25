# 🏫 School Bot

Telegram-бот для школы. Скоро здесь будет что-то интересное 😉

## 🚧 Статус

Ранняя стадия: тестовый бот с командами `/start` и `/ping`.

## 🛠 Стек

- **Язык:** TypeScript + [grammY](https://grammy.dev)
- **Хостинг:** [Vercel](https://vercel.com) (serverless-функция, бот работает через webhook)
- **База данных:** [Turso](https://turso.tech) (libSQL / SQLite) — подключим позже

## 📁 Структура

```
api/bot.ts              — webhook-функция для Vercel (/api/bot)
src/bot.ts              — сам бот: команды и обработчики
scripts/dev.ts          — локальный запуск через polling
scripts/set-webhook.ts  — привязка бота к адресу на Vercel
```

## 🚀 Локальный запуск

```bash
npm install
cp .env.example .env    # и вписать BOT_TOKEN
npm run dev
```

## ☁️ Деплой на Vercel

1. Импортировать репозиторий в Vercel.
2. В **Settings → Environment Variables** добавить `BOT_TOKEN` и `WEBHOOK_SECRET`.
3. После деплоя привязать webhook:
   ```bash
   npm run set-webhook -- https://<project>.vercel.app
   ```

> ⚠️ Когда бот работает через webhook на Vercel, `npm run dev` его отключает (удаляет webhook). После локальных тестов снова выполните `set-webhook`.
