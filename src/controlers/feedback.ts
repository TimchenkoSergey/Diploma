import * as winston from 'winston';
import * as express from 'express';

import { Logger } from '../libs';

const log: winston.LoggerInstance = new Logger().logger;

export const feedbackController: express.RequestHandler = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const name: string = req.body.name;
        const email: string = req.body.email;
        const feedback: string = req.body.feedback;

        log.debug(`Received a POST request for feedback`);

        res.json({ status: 'ok' });
    }
    catch (err) {
        next(err);
    }
};
