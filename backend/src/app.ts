import express from "express";
import routes from "./routes/routes";

export default function App() {
  const server = express();

  function middlewares() {
    server.use(express.urlencoded({ extended: true }));

    server.use(routes);
  }

  middlewares();

  return server;
}
