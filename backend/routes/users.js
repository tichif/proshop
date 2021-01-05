import { Router } from 'express';

import { authUser } from '../controllers/users.js';

const router = Router();

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
router.route('/login').post(authUser);

export default router;
