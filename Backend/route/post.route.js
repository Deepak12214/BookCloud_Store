import express from 'express';
import { createNewPost, getPost, updatePost,getOwnPost ,deletePost } from '../controller/post.controller.js';
import { authenticateToken, protectRoute } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/newPost',protectRoute,createNewPost);
router.get('/getPost', getPost);
router.get('/getOwnPost',authenticateToken, getOwnPost);
router.get('/delete/:id',authenticateToken, deletePost);
router.post('/edit/:id',protectRoute,updatePost);


export default router;