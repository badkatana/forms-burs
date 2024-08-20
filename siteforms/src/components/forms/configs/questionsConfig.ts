import { findValidationSequence } from "components/lib/validation";
import { TEXT_REQUIRED } from "constants/formsConstant";
import { IFormFields } from "interfaces/IFormFields";

export const questionsGirlFields: IFormFields[] = [
  {
    name: "colour",
    label: "Your favorite color",
    type: "select",
    options: [
      { label: "blue", value: "blue" },
      { label: "red", value: "red" },
      { label: "white", value: "white" },
      { label: "black", value: "black" },
      { label: "green", value: "green" },
      { label: "lavender", value: "lavender" },
      { label: "yellow", value: "yellow" },
    ],
  },
  {
    name: "country",
    label: "Which country you want to visit?",
    type: "select",
    options: [
      { label: "Germany", value: "Germany" },
      { label: "China", value: "China" },
      { label: "Japan", value: "Japan" },
      { label: "Salvador", value: "Salvador" },
    ],
    validation: {
      required: TEXT_REQUIRED,
    },
  },
  {
    name: "secret",
    label: "Choose one secret option",
    type: "radio",
    options: [
      { label: "Secret 1", value: "Secret 1" },
      { label: "Secret 2", value: "Secret 2" },
      { label: "Secret 3", value: "Secret 3" },
      { label: "Secret 4", value: "Secret 4" },
    ],
    validation: {
      required: TEXT_REQUIRED,
    },
  },
  {
    name: "word",
    label: "Your favorire word",
    type: "text",
    validation: {
      pattern: {
        value: findValidationSequence("name"),
        message: "it's not a word",
      },
    },
  },
  {
    name: "news",
    label: "Do you want more of our news?",
    type: "checkbox",
  },
  {
    name: "meow",
    label: "Meow?",
    type: "switch",
  },
  {
    name: "options",
    label: "Which traits are more important for you?",
    type: "drag",
    options: [
      { label: "kindness", value: "kindness" },
      { label: "optimism", value: "optimism" },
      { label: "empathy", value: "empathy" },
      { label: "commitment", value: "commitment" },
    ],
  },
  {
    name: "options2",
    label: "What do you prefer doing in free time?",
    type: "drag",
    options: [
      { label: "singing", value: "singing" },
      { label: "gaming", value: "gaming" },
      { label: "reading", value: "reading" },
      { label: "walking", value: "walking" },
    ],
  },
  {
    name: "image",
    label: "upload your photo",
    type: "upload",
    validation: { required: TEXT_REQUIRED },
  },
  {
    name: "image",
    label: "Check if you like",
    type: "checkbox group",
    validation: { required: TEXT_REQUIRED },
    options: [
      { label: "singing", value: "singing" },
      { label: "gaming", value: "gaming" },
      { label: "reading", value: "reading" },
      { label: "walking", value: "walking" },
    ],
  },
];
