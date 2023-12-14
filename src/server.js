import express, { json } from 'express';
import authRouter from './routes/authRoutes.js';
import { connectDb } from './config/database.js';
import transactionRouter from './routes/transactionRoutes.js';

const app = express();

connectDb();

app.use(json());
app.use(authRouter);
app.use(transactionRouter);

const port = process.env.PORT;

app.listen(port, () => console.log(`server listening in port ${port}`));