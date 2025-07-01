import UploadFile from '../models/UploadFile.js';

export const uploadFile = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const newFile = new UploadFile({
      originalName: file.originalname,
      filename: file.filename,
      filePath: `/uploads/${file.filename}`,
      size: file.size,
      mimeType: file.mimetype,
    });

    const savedFile = await newFile.save();
    res.status(201).json(savedFile);
  } catch (err) {
    console.error('Upload error:', err.message);
    res.status(500).json({ message: 'File upload failed', error: err.message });
  }
};
