import { Router } from 'express';

import {
  authUser,
  getUserProfile,
  signup,
  updateUserProfile,
} from '../controllers/users.js';
import protect from '../middleware/authMiddleware.js';

const router = Router();

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
router.route('/login').post(authUser);

// @desc    Get user's profile      /   Update user's profile
// @route   POST /api/users/profile /   PUT /api/users/profile
// @access  Private
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// @desc    Sign up a user
// @route   POST /api/users/
// @access  Public
router.route('/').post(signup);

export default router;
