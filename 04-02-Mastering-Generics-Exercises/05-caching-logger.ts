enum LoggingLevel {
    Info = "Info",
    Error = "Error",
    Warning = "Warning",
    Debug = "Debug",
}

enum LoggingFormat {
    Standard = "[%level][%date] %text",
    Minimal = "*%level* %text"
}

interface CachingLogger<T extends LoggingLevel, V extends LoggingFormat> {
    cachedLogs: Map<T, string[]>
    log(logLevel: T, message: string): void;
    getFormat(): V
}

class Logger<T extends LoggingLevel,V extends LoggingFormat> implements CachingLogger<T, V>{
    cachedLogs: Map<T, string[]> = new Map<T,string[]>() ;
    private format: V;

    constructor( format: V){
        this.format=format;
    }
    log(logLevel: T, message: string): void {
        const dateString = new Date().toISOString();
        const formattedMessage = this.format.replace('%level',logLevel).replace('%date', dateString). replace('%text', message)
        console.log(formattedMessage);
        let logsForLevel = this.cachedLogs.get(logLevel) ?? [];
        logsForLevel.push(formattedMessage);
        this.cachedLogs.set(logLevel, logsForLevel);
    }
    getFormat(): V {
        return this.format;
    }

}

let logger1 = new Logger<LoggingLevel, LoggingFormat >(LoggingFormat.Standard)
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