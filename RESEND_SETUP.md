# Настройка Resend для отправки email

## 1. Получение API ключа

1. Зарегистрируйтесь на [Resend.com](https://resend.com)
2. Перейдите в раздел API Keys
3. Создайте новый API ключ
4. Скопируйте ключ

## 2. Настройка переменных окружения

Файл `.env.local` уже создан в корне проекта. Замените значение API ключа:

```env
RESEND_API_KEY=your_actual_resend_api_key_here
```

## 3. Настройка домена

### Для разработки (тестирование):
- Используется `onboarding@resend.dev` - тестовый домен Resend
- Работает сразу после получения API ключа

### Для продакшена:
1. В панели Resend добавьте ваш домен
2. Настройте DNS записи согласно инструкциям
3. Дождитесь верификации домена
4. Замените `onboarding@resend.dev` на ваш верифицированный домен

## 4. Тестирование

После настройки вы можете протестировать отправку email через форму на сайте.

## Исправления

✅ **Исправлена ошибка статической генерации** - добавлен `export const dynamic = 'force-dynamic'` в API route

✅ **Исправлен конфликт с output: 'export'** - убрана настройка статического экспорта из `next.config.js` для поддержки API routes

✅ **Исправлена ошибка верификации домена** - используется тестовый домен Resend для разработки

## Примечания

- В режиме разработки используется тестовый домен `onboarding@resend.dev`
- Для продакшена обязательно настройте верифицированный домен
- API ключ должен быть скрыт и не попадать в репозиторий
- Файл `.env.local` уже добавлен в `.gitignore`
- **Важно**: API routes работают только в серверном режиме, не в статическом экспорте 