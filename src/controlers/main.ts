import * as path from 'path';
import * as winston from 'winston';
import * as express from 'express';

import { Logger } from '../libs';

const log: winston.LoggerInstance = new Logger().logger;

export const mainController: express.RequestHandler = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        log.debug(`Received a GET request for index page`);

        res.sendFile(path.resolve('build/public/index.html'));
    }
    catch (err) {
        next(err);
    }
};
