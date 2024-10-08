export const GENDER_OPTIONS = [
  { label: "male", value: "male" },
  { label: "female", value: "female" },
];

export const REGEXP_VALIDATION = [
  {
    type: "email",
    sequence: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  {
    type: "phoneNumber",
    sequence: /^[0-9]{11}$/,
  },
  {
    type: "name",
    sequence: /^[a-zA-Z\s]*$/,
  },
  {
    type: "password",
    sequence: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
  },
];

export const TEXT_REQUIRED = "This field is required";
