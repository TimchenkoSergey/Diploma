import * as winston from 'winston';
import * as express from 'express';

import { Logger } from '../libs';

const log: winston.LoggerInstance = new Logger().logger;

export const errorHandler500: express.ErrorRequestHandler = (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    log.error(`Error - ${err.stack}`);

    res.status(500);
    res.json({ errorCode: 500, message: 'Internal server error' });
};
