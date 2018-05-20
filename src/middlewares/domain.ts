import * as http from 'http';
import * as domain from 'domain';
import * as cluster from 'cluster';
import * as winston from 'winston';

import { Logger } from '../libs';

const log: winston.LoggerInstance = new Logger().logger;

export const getDomain = (server: http.Server) => {
    return (req, res, next) => {
        const domainObj: domain.Domain = domain.create();

        domainObj.on('error', function (err) {
            log.error(`DOMAIN : Catch exception - ${err}`);

            try {
                setTimeout(function () {
                    process.exit(1);
                }, 5000);

                const worker: cluster.Worker = cluster.worker;

                if (worker) {
                    worker.disconnect();
                }

                server.close();

                try {
                    next(err);
                }
                catch (err) {
                    res.statusCode = 500;
                    res.setHeader('content-type', 'text/plain');
                    res.end('Oops, there was a problem!');
                }
            }
            catch (err) {
                log.error(`DOMAIN : Can not send response - ${err}`);
            }
        });

        domainObj.add(req);
        domainObj.add(res);
        domainObj.run(next);
    };
};
