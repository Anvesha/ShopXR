import express from 'express';
import multer from 'multer';
import path from 'path';
import { uploadFile } from '../controllers/uploadController.js';

const router = express.Router();

// ✅ Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

// ✅ File Filter for JPEG, PNG, PDF
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, and PDF allowed.'));
  }
};

// ✅ Max size: 5MB
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter,
});

// ✅ POST /api/upload
router.post('/', upload.single('file'), uploadFile);

export default router;
