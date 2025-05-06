import express from "express"
const router=express.Router()
import { userCreation,getAllUser } from "../Controllers/UserCre.js"

router.post("/create",userCreation)
router.get("/userList",getAllUser)

export default router