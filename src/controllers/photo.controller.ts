import { Request, Response } from "express";
import Photo from "../models/Photo";
import path from "path";
import fs from "fs-extra";

export const createPhoto = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { title, description } = req.body;
  const newPhoto = {
    title: title,
    description: description,
    imagePath: req.file?.path,
  };

  const photo = new Photo(newPhoto);
  await photo.save();
  return res.json({
    message: "Photo succesfully saved",
    photoInfo: photo,
  });
};

export const getPhotos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const photos = await Photo.find();
  return await res.json({
    photosList: photos,
  });
};

export const getPhotoById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const photo = await Photo.findById(id);
  return await res.json({
    photo,
  });
};

export const deletePhoto = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const photo = await Photo.findByIdAndDelete(id);
  //Delete photo
  if (photo) {
    await fs.unlink(path.resolve(photo.imagePath));
    // console.log(path.resolve(photo.imagePath));
  }
  return res.json({
    message: "Photo deleted!",
    photo,
  });
};

export const updatePhoto = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const { title, description } = req.body;
  const updatePhoto = await Photo.findByIdAndUpdate(
    id,
    {
      title,
      description,
    },
    { new: true }
  );
  return res.json({
    message: "Photo updated!",
    updatePhoto,
  });
};
