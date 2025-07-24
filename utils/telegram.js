// D:\FlashCopyBot\utils\telegram.js

/**
 * Telegram-Notifier für Systemereignisse, Alarme & Signalsendungen
 * ⚠️ Dieser Code enthält keine sensiblen Informationen über Trading-Logik.
 */

const axios = require('axios');
const config = require('../config.json');

const TELEGRAM_API = `https://api.telegram.org/bot${config.telegram_bot_token}/sendMessage`;

/**
 * Sendet eine einfache Nachricht an den angegebenen Telegram-Chat.
 * @param {string} message - Die Nachricht, die gesendet werden soll.
 */
async function sendTelegramMessage(message) {
    try {
        const payload = {
            chat_id: config.telegram_chat_id,
            text: message,
            parse_mode: 'Markdown',
        };

        const res = await axios.post(TELEGRAM_API, payload);
        if (res.data.ok !== true) {
            console.warn('⚠️ Telegram API Rückmeldung negativ:', res.data);
        }
    } catch (err) {
        console.error('❌ Fehler beim Senden an Telegram:', err.message);
    }
}

module.exports = {
    sendTelegramMessage,
};
