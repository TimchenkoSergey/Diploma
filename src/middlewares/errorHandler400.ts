import * as winston from 'winston';
import * as express from 'express';

import { Logger } from '../libs';

const log: winston.LoggerInstance = new Logger().logger;

export const errorHandler400: express.RequestHandler = (req: express.Request, res: express.Response) => {
    log.error(`Received a 404 request for a page - ${req.url}`);

    res.status(404);
    res.json({ errorCode: 404, message: 'Page not found' });
};
