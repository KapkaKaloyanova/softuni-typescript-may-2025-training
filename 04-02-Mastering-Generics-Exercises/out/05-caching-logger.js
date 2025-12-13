"use strict";
var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel["Info"] = "Info";
    LoggingLevel["Error"] = "Error";
    LoggingLevel["Warning"] = "Warning";
    LoggingLevel["Debug"] = "Debug";
})(LoggingLevel || (LoggingLevel = {}));
var LoggingFormat;
(function (LoggingFormat) {
    LoggingFormat["Standard"] = "[%level][%date] %text";
    LoggingFormat["Minimal"] = "*%level* %text";
})(LoggingFormat || (LoggingFormat = {}));
class Logger {
    cachedLogs = new Map();
    format;
    constructor(format) {
        this.format = format;
    }
    log(logLevel, message) {
        const dateString = new Date().toISOString();
        const formattedMessage = this.format.replace('%level', logLevel).replace('%date', dateString).replace('%text', message);
        console.log(formattedMessage);
        let logsForLevel = this.cachedLogs.get(logLevel) ?? [];
        logsForLevel.push(formattedMessage);
        this.cachedLogs.set(logLevel, logsForLevel);
    }
    getFormat() {
        return this.format;
    }
}
let logger1 = new Logger(LoggingFormat.Standard);
logger1.log(LoggingLevel.Info, "Application started successfully.");
logger1.log(LoggingLevel.Error, "Database connection failed.");
logger1.log(LoggingLevel.Info, "Configuration file loaded.");
logger1.log(LoggingLevel.Info, "Configuration file loaded.");
logger1.log(LoggingLevel.Error, "Database connection failed.");
console.log(logger1.cachedLogs);
// let logger = new Logger<LoggingLevel, LoggingFormat>(LoggingFormat.Standard);
// logger.log(LoggingLevel.Info, "This is an info message.");
// logger.log(LoggingLevel.Info, "Another message.");
// logger.log(LoggingLevel.Error, "Something went wrong.");
// logger.log(LoggingLevel.Warning, "Be careful with the type assertions.");
// logger.log(LoggingLevel.Debug, "Running the debugger.");
// console.log('-----------')
// console.log([...logger.cachedLogs.entries()].map(x => x[1].join('\n')).join('\n'))
//! second input
// let logger = new Logger<LoggingLevel, LoggingFormat>(LoggingFormat.Minimal);
// logger.log(LoggingLevel.Info, "Just a simple message.");
// logger.log(LoggingLevel.Error, "A Problem happened.");
// console.log('-----------')
// console.log(logger.getFormat());
// console.log([...logger.cachedLogs.entries()].map(x => x[1].join('\n')).join('\n'))
//# sourceMappingURL=05-caching-logger.js.map