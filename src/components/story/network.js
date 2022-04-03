import { Router } from "express";
import * as Controller from "./controller";

const storyRouter = Router();

storyRouter.route("/api/listar/").get(Controller.list);
storyRouter.route("/api/crear").post(Controller.store);
storyRouter.route("/api/actualizar/:storiesId").put(Controller.update);
storyRouter.route("/api/eliminar/:storiesId").delete(Controller.destroy);

export default storyRouter;
