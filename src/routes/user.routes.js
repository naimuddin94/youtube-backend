/* eslint-disable import/extensions */
/* eslint-disable import/named */
import express from 'express';
import {
    loginUser,
    logoutUser,
    registerUser,
    updateAvatar,
    updatePassword,
    userRefreshToken,
} from '../controllers/user.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { upload } from '../middlewares/multer.middleware.js';

const userRouter = express.Router();

userRouter.route('/register').post(
    upload.fields([
        {
            name: 'avatar',
            maxCount: 1,
        },
        {
            name: 'coverImage',
            maxCount: 1,
        },
    ]),
    registerUser
);
userRouter.route('/login').post(loginUser);
userRouter.route('/logout').post(verifyJWT, logoutUser);
userRouter.route('/refresh-token').put(userRefreshToken);
userRouter.route('/update-password').patch(verifyJWT, updatePassword);
userRouter.route('/update-avatar').patch(verifyJWT, upload.single('avatar'), updateAvatar);

export default userRouter;
