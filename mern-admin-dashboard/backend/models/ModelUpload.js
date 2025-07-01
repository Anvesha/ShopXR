// models/ModelUpload.js
import mongoose from "mongoose";

const modelUploadSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference
  modelName: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
  glbFile: { type: String },
  usdzFile: { type: String },
  thumbnail: { type: String },
  status: {
    type: String,
    enum: ["Pending Upload", "Processing", "Completed"],
    default: "Pending Upload",
  },
  expiryDate: { type: Date },
  frameCode: { type: String },
});

const ModelUpload = mongoose.model("ModelUpload", modelUploadSchema);

export default ModelUpload;
