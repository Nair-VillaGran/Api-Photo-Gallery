import { Router } from "express";
import {
  createPhoto,
  deletePhoto,
  getPhotoById,
  getPhotos,
  updatePhoto,
} from "../controllers/photo.controller";
import multer from "../libs/multer";
const router = Router();

router
  .route("/photos")
  .get(getPhotos)
  .post(multer.single("image"), createPhoto);

router
  .route("/photos/:id")
  .get(getPhotoById)
  .delete(deletePhoto)
  .put(updatePhoto);

export default router;
