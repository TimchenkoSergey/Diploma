import * as express from 'express';
import {
    mainController,
    modelController,
    modelsController,
    feedbackController,
} from '../controlers';

export const registerRouts = async (app: express.Application) => {
    app.get('/', mainController);
    app.get('/models/', modelsController);
    app.get('/models/:id', modelController);
    app.post('/feedback/', feedbackController);
};
