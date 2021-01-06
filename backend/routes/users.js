import { Router } from 'express';

import { authUser, getUserProfile } from '../controllers/users.js';
import protect from '../middleware/authMiddleware.js';

const router = Router();

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
router.route('/login').post(authUser);

// @desc    Get user's profile
// @route   POST /api/users/profile
// @access  Private
router.route('/profile').get(protect, getUserProfile);

export default router;
