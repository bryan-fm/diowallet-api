import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import {authMiddleware} from "../middlewares/authMiddleware.js";
import { validationSchemaMiddleWare } from "../middlewares/validationSchemaMiddleware.js";
import { CreateTransaction } from "../schemas/validation/CreateTransaction.js";

const transactionRouter = Router();

transactionRouter.use(authMiddleware);

transactionRouter.post('/transactions', validationSchemaMiddleWare(CreateTransaction), transactionController.create);

transactionRouter.get('/transactions',  transactionController.findAllByUser)

export default transactionRouter;