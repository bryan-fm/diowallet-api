import { Router } from "express";
import authController from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validationSchemaMiddleWare } from "../middlewares/validationSchemaMiddleware.js";
import { CreateUser } from "../schemas/validation/CreateUser.js";
import { AuthUser } from "../schemas/validation/AuthUser.js";

const authRouter = Router();

authRouter.post('/signup', validationSchemaMiddleWare(CreateUser), authController.signup);
authRouter.post('/signin', validationSchemaMiddleWare(AuthUser), authController.signin);

authRouter.get('/me', authMiddleware, authController.loggedUser);

export default authRouter;