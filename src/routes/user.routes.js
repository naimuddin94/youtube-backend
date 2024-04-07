import express from 'express';

const userRouter = express.router();

userRouter.route('/register').post();

export { userRouter };
