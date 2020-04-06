import { Router, Request, Response } from 'express';

import Main from './routes/Main';


const routes = Router();

routes.get('/', Main.main);

export default routes;
