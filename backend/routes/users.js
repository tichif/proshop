import { Router } from 'express';

import {
  authUser,
  deleteUser,
  getAllUsers,
  getUserById,
  getUserProfile,
  signup,
  updateUser,
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

// @desc    Sign up an user  / Get all users
// @route   POST /api/users/  / GET /api/users/
// @access  Public  / Private/Admin
router.route('/').post(signup).get(protect, admin, getAllUsers);

// @desc    Delete an user / Get an user  / Update an user
// @route   DELETE /api/users/:id / GET /api/users/:id  / PUT /api/users/;id
// @access  Private / Admin
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
