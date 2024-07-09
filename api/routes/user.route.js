import express from "express";
import { deleteUser, getUserListings, test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// test api
router.get("/test", test);
// update api
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id",verifyToken,deleteUser);
router.get("/listings/:id",verifyToken,getUserListings);
export default router;
