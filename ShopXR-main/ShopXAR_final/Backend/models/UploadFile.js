import mongoose from 'mongoose';

const uploadFileSchema = new mongoose.Schema({
  originalName: String,
  filename: String,
  filePath: String,
  size: Number,
  mimeType: String,
  uploadDate: {
    type: Date,
    default: Date.now,
  },
});

const UploadFile = mongoose.model('UploadFile', uploadFileSchema);
export default UploadFile;
