import { Router } from 'express';
import PointsController from '../controllers/PointsController';

const routes = Router();

const points = PointsController();

routes.post('/points', points.create);
routes.get('/points/:id', points.show);
routes.get('/points', points.index);

export default routes;
