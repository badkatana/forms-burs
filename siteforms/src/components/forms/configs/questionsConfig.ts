import { TEXT_REQUIRED } from "../../../constants/formsConstant";
import { IFormFields } from "../../../interfaces/IFormFields";
import { findValidationSequence } from "../lib/common";

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
    name: "news",
    label: "Meow?",
    type: "switch",
  },
  {
    name: "options",
    label: "options",
    type: "drag",
    options: [
      { label: "polina", value: "polina" },
      { label: "sd", value: "sd" },
    ],
  },
];

// Назовите вашу самую характерную черту.
// Какие качества вы больше всего цените в мужчине?
// Какие качества вы больше всего цените в женщине?
// Что вы больше всего цените в своих друзьях?
// Что является вашим главным недостатком?
// Какое у вас любимое занятие?
// Какова ваша мечта о счастье?
// Что вы считаете самым большим несчастьем?
// Каким вы хотели бы быть?
// В какой стране вам хотелось бы жить?
// Какой ваш любимый цвет?
// Любимый цветок?
// Любимая птица?
// Любимые писатели?
// Любимые поэты?
// Любимый литературный герой?
// Любимые литературные героини?
// Любимые композиторы?
// Любимые художники?
// Любимые герои в реальной жизни?
// Любимая героиня в истории?
// Любимые имена?
// Что вы больше всего ненавидите?
// Каких исторических персонажей вы презираете?
// Какой момент в военной истории вы цените больше всего?
// Какую реформу вы цените особенно высоко?
// Какой способностью вам хотелось бы обладать?
// Как вы хотели бы умереть?
// Каково ваше состояние духа в настоящий момент?
// К каким порокам вы чувствуете наибольшее снисхождение?
// Каков ваш девиз?
