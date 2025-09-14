import { Router } from "express";

export const router = Router();

import {
  createList,
  findAllLists,
  findListById,
  updateList,
  deleteList,
} from "../controllers/list.controller.js";

router.post("/list", createList);
router.get("/list", findAllLists);
router.get("/list/:id", findListById);
router.put("/list/:id", updateList);
router.delete("/list/:id", deleteList);

export default router;
