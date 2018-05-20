import * as os from 'os';
import * as cluster from 'cluster';
import * as winston from 'winston';

import { Logger } from './libs';
import { createServer } from './index';

const log: winston.LoggerInstance = new Logger().logger;

export const startApp = () => {
    if (cluster.isMaster) {
        const cpus: os.CpuInfo[] = os.cpus();

        cpus.forEach(function () {
            const worker: cluster.Worker = cluster.fork();
            log.debug(`CLUSTER: Started worker id - ${worker.id}`);
        });

        cluster.on('disconnect', function (worker) {
            log.error(`CLUSTER: Disconnect worker id - ${worker.id}`);
        });

        cluster.on('exit', function (worker, code) {
            log.error(`CLUSTER: Exit worker id - ${worker.id} with code ${code}`);

            const newWorker: cluster.Worker = cluster.fork();
            log.debug(`CLUSTER: Started worker id - ${newWorker.id}`);
        });
    }
    else {
        createServer();
    }
};

startApp();
