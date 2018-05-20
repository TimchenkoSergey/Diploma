import * as path from 'path';
import * as http from 'http';
import * as compression from 'compression';
import * as express from 'express';
import * as expressSanitizer from 'express-sanitizer';
import * as winston from 'winston';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

import { PORT } from './configs';
import { Logger } from './libs';
import {
    getDomain,
    errorHandler400,
    errorHandler500,
} from './middlewares';
import { registerRouts } from './routes';

const app: express.Application = express();
const log: winston.LoggerInstance = new Logger().logger;

// todo csrf

export const createServer = () => {
    app.use(helmet());
    app.use(compression());
    app.use(bodyParser.urlencoded({ extended : true }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(expressSanitizer([{}]));
    app.use('/public', express.static(path.resolve('build/public')));

    const server: http.Server = app.listen(PORT, function () {
        log.debug(`Server start on port - ${PORT}`);
    });
    app.use(getDomain(server));
    registerRouts(app);
    app.use(errorHandler400);
    app.use(errorHandler500);
};
