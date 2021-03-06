import { Router } from 'express';

import {
  authUser,
  deleteUser,
  getAllUsers,
  getUserProfile,
  signup,
  updateUserProfile,
} from '../controllers/users.js';
import { protect, admin } from '../middleware/authMiddleware.js';

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

// @desc    Sign up an user
// @route   POST /api/users/
// @access  Public
// @desc    Get all users
// @route   GET /api/users/
// @access  Private/Admin
router.route('/').post(signup).get(protect, admin, getAllUsers);

// @desc    delete an user
// @route   DELETE /api/users/:id
// @access  Private / Admin
router.route('/:id').delete(protect, admin, deleteUser);

export default router;
