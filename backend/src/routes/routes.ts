import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) =>
  res.redirect("https://github.com/Cauaspinheiro/next-level-week-1")
);

export default routes;
