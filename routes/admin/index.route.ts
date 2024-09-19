import { Express } from "express";
import { dashboardRoute } from "./dashboard.route";
import { systemConfig } from "../../config/system";
import { topicRoute } from "./topic.route";

export const routesAdmin = (app: Express) => {
  const PATH = `/${systemConfig.prefixAdmin}`;

  app.use(`${PATH}/dashboard`, dashboardRoute);

  app.use(`${PATH}/topics`, topicRoute);
}