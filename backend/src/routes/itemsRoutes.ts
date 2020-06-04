import { Router } from 'express';
import ItemsController from '../controllers/ItemsController';

const routes = Router();

const items = ItemsController();

routes.get('/items', items.index);

export default routes;
