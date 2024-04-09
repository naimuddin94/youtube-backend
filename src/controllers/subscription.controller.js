/* eslint-disable import/extensions */
import Subscription from '../models/subscription.model.js';
import { ApiError, ApiResponse, asyncHandler } from '../utils/index.js';

// create a subscription
const createSubscription = asyncHandler(async (req, res) => {
    const { channel } = req.body;

    if (!channel?.trim()) {
        throw new ApiError(400, 'channel id required');
    }

    const subscription = await Subscription.create({
        subscriber: req.user._id,
        channel,
    });

    if (!subscription) {
        throw new ApiError(400, 'Something went wrong when creating subscription');
    }

    return res.status(201).json(new ApiResponse(201, subscription, 'Subscribed successfully'));
});

export { createSubscription };
