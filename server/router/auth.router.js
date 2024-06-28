import express from 'express';
import authController from '../controller/auth.controller.js';
const router = express.Router();

router.post('/', authController.login)

export default router;