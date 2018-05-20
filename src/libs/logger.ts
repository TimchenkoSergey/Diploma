import * as winston from 'winston';

export interface ILogger {
    logger: winston.LoggerInstance;
}

export class Logger implements ILogger {
    private _logger: winston.LoggerInstance;

    get logger(): winston.LoggerInstance { return this._logger; }

    constructor(config = {}) {
        this._logger = new winston.Logger({
            transports: [
                new winston.transports.Console({
                    colorize: true,
                    level: 'debug',
                    ...config,
                }),
            ],
        });
    }
}
