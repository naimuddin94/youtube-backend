/* eslint-disable import/extensions */
import express from 'express';
import { createSubscription } from '../controllers/subscription.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const subscriptionRouter = express.Router();

subscriptionRouter.route('/create').post(verifyJWT, createSubscription);

export default subscriptionRouter;
