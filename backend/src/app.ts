import express from 'express';
import routes from './routes/routes';
import path from 'path';
import cors from 'cors';

export default function App() {
  const server = express();

  function middlewares() {
    server.use(express.urlencoded({ extended: true }));
    server.use(express.json());

    server.use(cors());

    server.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );
    server.use(routes);
  }

  middlewares();

  return server;
}
