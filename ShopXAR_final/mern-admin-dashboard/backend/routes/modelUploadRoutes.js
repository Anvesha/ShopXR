// routes/modelUploadRoutes.js
import express from "express";
import { getAllModelUploads } from "../controllers/modelUploadController.js";

const router = express.Router();

router.get("/", getAllModelUploads);

export default router;
