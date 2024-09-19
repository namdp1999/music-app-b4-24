import express from "express";
import multer from "multer";
const router = express.Router();

import * as controller from "../../controllers/admin/song.controller";
import * as uploadCoud from "../../middlewares/admin/uploadCloud.middleware";

const upload = multer();

router.get("/", controller.index);

router.get("/create", controller.create);

router.post(
  "/create",
  upload.single("avatar"),
  uploadCoud.uploadSingle,
  controller.createPost
);

export const songRoute = router;