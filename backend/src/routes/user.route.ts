import { Router } from "express";
import { addFriend , getFriends , createFriendRequest , getUser , searchUser , getFriendRequest , removeFriend } from "../controllers/user.controller";

const router = Router()


router.route("/addFriend").post(addFriend)
router.route("/createFriendRequest").post( createFriendRequest)
router.route("/getFriends/:userId").get(getFriends)

router.route("/user/:username").get(getUser)
router.route("/searchUser/:username").get(searchUser)

router.route("/getFriendRequest/:userId").get(getFriendRequest)
router.route("/removeFriend").post(removeFriend)


export default router