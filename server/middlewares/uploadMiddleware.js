const multer = require('multer');
const path = require('path');
const { Readable } = require('stream');
const cloudinary = require('../config/cloudinary');

// 1. RAM Memory Storage - Does NOT write files to local disk
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedTypes = /mp4|webm|ogg|mov|jpeg|jpg|png|gif|webp|pdf|svg/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname || mimetype) {
    return cb(null, true);
  }
  cb(new Error('Only video, image, and pdf files are allowed!'), false);
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB limit
  },
  fileFilter: fileFilter,
});

// 2. Cloudinary Upload Helper (Supports Images, Videos, PDFs)
const uploadToCloudinary = (fileBuffer, folder = 'svasc') => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: folder,
        resource_type: 'auto', // Automatically handles image / video / raw (pdf)
      },
      (error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );

    Readable.from(fileBuffer).pipe(uploadStream);
  });
};

upload.uploadToCloudinary = uploadToCloudinary;

module.exports = upload;
module.exports.uploadToCloudinary = uploadToCloudinary;
