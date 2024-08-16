import { IFormFields } from "../../../interfaces/IFormFields";

export const NewsFromCountry: IFormFields = {
  name: "country",
  label: "News from...",
  type: "select",
  options: [
    { label: "USA", value: "us" },
    { label: "Japan", value: "jp" },
    { label: "Russia", value: "ru" },
    { label: "Hungary", value: "hu" },
    { label: "China", value: "cn" },
    { label: "South Korea", value: "sr" },
  ],
};
