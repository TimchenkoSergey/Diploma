import * as winston from 'winston';
import * as express from 'express';

import { Logger } from '../libs';

const log: winston.LoggerInstance = new Logger().logger;

export const modelController: express.RequestHandler = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const id: number = +req.params.id;

        log.debug(`Received a GET request for model with id - ${id}`);

        res.json({});
    }
    catch (err) {
        next(err);
    }
};

export const modelsController: express.RequestHandler = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        log.debug(`Received a GET request for models`);

        res.json({});
    }
    catch (err) {
        next(err);
    }
};
