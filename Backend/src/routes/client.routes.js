import express from "express";
import Upload from "../middlewares/multer.middleware.js";
import { fileValidator } from "../middlewares/fileValidator.middleware.js";
import { requireBody } from "../middlewares/validateBody.middleware.js";
import { Client } from "../models/client.model.js";

import {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
} from "../controllers/client.controller.js";

const router = express.Router();

/* PUBLIC */
router.get("/", getAllClients);
router.get("/:id", getClientById);

/* ADMIN */
router.post(
  "/",
  Upload("client").single("image"),
  fileValidator({ types: ["image"], maxSizeMB: 5 }),
  requireBody(Client),
  createClient
);

router.put(
  "/:id",
  Upload("client").single("image"),
  fileValidator({ types: ["image"], maxSizeMB: 5 }),
  updateClient
);

router.delete("/:id", deleteClient);

export default router;
