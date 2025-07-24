// D:\FlashCopyBot\utils\logger.js

/**
 * Einfaches Logging-Modul für alle System-Komponenten
 * 📁 Speichert Logs zentral in /logs/debug_log.txt
 */

const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '..', 'logs', 'debug_log.txt');

/**
 * Schreibt eine Zeitstempel-Logzeile in die Logdatei.
 * @param {string} message - Die Nachricht, die geloggt werden soll.
 */
function log(message) {
    const timestamp = new Date().toISOString();
    const line = `[${timestamp}] ${message}\n`;
    fs.appendFile(logFilePath, line, (err) => {
        if (err) console.error('❌ Logger Fehler:', err.message);
    });
}

/**
 * Für kritische Fehler oder außergewöhnliche Events.
 * Optional: Weitere Verarbeitung (z. B. Telegram) kann hier eingebunden werden.
 * @param {string} errorMessage
 */
function logError(errorMessage) {
    log(`❌ ERROR: ${errorMessage}`);
}

module.exports = {
    log,
    logError,
};
