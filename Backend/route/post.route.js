import express from 'express';
import { createNewPost, getPost } from '../controller/post.controller.js';
import { protectRoute } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/newPost',protectRoute,createNewPost);
router.get('/getPost', getPost);


export default router;