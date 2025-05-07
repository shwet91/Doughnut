import { Router } from "express";
import { test } from "../controllers/test.controller";
import { verifyJWT } from "../middlewares/auth.middleware";


const router =  Router()

router.route("/test").post(  test)


export default router 