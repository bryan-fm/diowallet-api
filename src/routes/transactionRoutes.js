import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import {authMiddleware} from "../middlewares/authMiddleware.js";
import { validationSchemaMiddleWare, validationSchemaByParamsMiddleWare } from "../middlewares/validationSchemaMiddleware.js";
import { CreateTransaction } from "../schemas/validation/CreateTransaction.js";
import { IdParam } from "../schemas/validation/IdParam.js";
import { UpdateTransaction } from "../schemas/validation/UpdateTransaction.js";

const transactionRouter = Router();

transactionRouter.use(authMiddleware);

transactionRouter.post('/transactions', validationSchemaMiddleWare(CreateTransaction), transactionController.create);

transactionRouter.get('/transactions',  transactionController.findAllByUser)

transactionRouter.delete('/transactions/remove/:id', validationSchemaByParamsMiddleWare(IdParam),  transactionController.remove)

transactionRouter.patch(
    '/transactions/update/:id', 
    validationSchemaByParamsMiddleWare(IdParam),
    validationSchemaMiddleWare(UpdateTransaction),
    transactionController.update)

export default transactionRouter;