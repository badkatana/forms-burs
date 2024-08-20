import { IFormFields } from "interfaces/IFormFields";

export const getAllFieldsWithImages = (config: IFormFields[]) => {
  const images_names = [];
  for (let i = 0; i < config.length; i++) {
    if (config[i].type === "upload") {
      images_names.push(config[i].name);
    }
  }
  return images_names;
};

export const getImagesAsFormData = (
  images: string[],
  title: string,
  data: any
) => {
  const formData = new FormData();
  images.forEach((img) => {
    formData.append(`${title}`, data[img] as File);
  });
  return formData;
};

export function replaceFilesWithNames(obj: { [key: string]: any }) {
  const result: { [key: string]: any } = {};

  for (const key in obj) {
    const value = obj[key];
    if (value instanceof File) {
      result[key] = value.name;
    } else {
      result[key] = value;
    }
  }

  return result;
}
