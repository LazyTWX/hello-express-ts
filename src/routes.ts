import { Router, Request, Response } from 'express';

import { main } from './routes/Main';


const routes = Router();

routes.get('/', main);

export default routes;
