/* eslint-disable import/extensions */
/* eslint-disable comma-dangle */
/*
 * Title: Youtube Application
 * Description: A Backend Application With Express JS
 * Author: Md Naim Uddin
 * Date: 1/04/2024
 *
 */

// dependencies
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import subscriptionRouter from './routes/subscription.routes.js';
import userRouter from './routes/user.routes.js';

const app = express();

// middleware
app.use(express.json());
app.use(
    cors({
        origin: ['http://localhost:5173', 'http://localhost:3000'],
        credentials: true,
    })
);
app.use(cookieParser());

// testing route
app.get('/', (req, res) => {
    res.send('Server is running....');
});

// routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscription', subscriptionRouter);

export default app;
