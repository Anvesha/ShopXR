// controllers/modelUploadController.js
import ModelUpload from "../models/ModelUpload.js";

export const getAllModelUploads = async (req, res) => {
  try {
    const uploads = await ModelUpload.find().sort({ uploadDate: -1 });
    res.json(uploads);
  } catch (err) {
    console.error("Error fetching model uploads:", err);
    res.status(500).json({ error: "Server error" });
  }
};
