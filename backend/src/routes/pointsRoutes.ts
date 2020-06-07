import { Router } from 'express';
import PointsController from '../controllers/PointsController';

const routes = Router();
import multerConfig from '../config/multer';
import multer from 'multer';
import pointValidator from '../validators/pointValidator';

const upload = multer(multerConfig);

const points = PointsController();

routes.post('/points', pointValidator, upload.single('image'), points.create);
routes.get('/points/:id', points.show);
routes.get('/points', points.index);

export default routes;
