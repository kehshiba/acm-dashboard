import express from "express"
import {
    getFeedPosts,
    getUserPosts,
    likeUnlike
} from "../controllers/posts.js"
const router = express.Router();

import {verifyToken} from "../middleware/auth.js"

router.get("/",verifyToken,getFeedPosts);
router.get("/:userId/posts",verifyToken,getUserPosts)


router.patch("/:id/like",verifyToken,likeUnlike);

export default router;