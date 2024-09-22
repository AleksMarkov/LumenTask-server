//boardRoutes.js
import express from "express";
import authenticate from "../middlewares/authenticate.js";
import validateBody from "../middlewares/validateBody.js";
import isValidId from "../middlewares/isValidId.js";
import boardControllers from "../controllers/boardControllers.js";
import {
  boardAddSchema,
  boardEditSchema,
} from "../schemas/joiSchemas/boardSchemas.js";

const boardRouter = express.Router();

boardRouter.use(authenticate);

boardRouter.post(
  "/",
  validateBody(boardAddSchema),
  boardControllers.createBoard
);

boardRouter.get("/", boardControllers.getAllBoards);

boardRouter.get("/:id", isValidId, boardControllers.getOneBoard);

boardRouter.put(
  "/:id",
  isValidId,
  validateBody(boardEditSchema),
  boardControllers.updateBoard
);

boardRouter.delete("/:id", isValidId, boardControllers.deleteBoard);

export default boardRouter;
