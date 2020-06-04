import { Router } from 'express';
import itemsRoutes from './itemsRoutes';
import pointsRoutes from './pointsRoutes';

const routes = Router();

routes.get('/', (req, res) =>
  res.redirect('https://github.com/Cauaspinheiro/next-level-week-1')
);

routes.use(itemsRoutes);
routes.use(pointsRoutes);

export default routes;
