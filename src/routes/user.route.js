import { Router } from "express";

export const router = Router();

import {
  createUser,
  UpdateUser,
  findAllUsers,
  findUserById,
  deleteUser,
} from "../controllers/user.controller.js";

router.get("/user", findAllUsers);
router.post("/user", createUser);
router.get("/user/:id", findUserById);
router.put("/user/:id", UpdateUser);
router.delete("/user/:id", deleteUser);

export default router;
