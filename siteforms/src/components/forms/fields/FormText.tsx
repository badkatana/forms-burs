import TextField from "@mui/material/TextField";

type FormTextProps = {
  labelField: string;
  keyField: string;
  defaultVal: string;
  placeholderText: string;
};

export const FormText = (props: FormTextProps) => {
  return (
    <TextField
      label={props.labelField}
      key={props.keyField}
      defaultValue={props.defaultVal}
      placeholder={props.placeholderText}
      fullWidth
      margin="normal"
    />
  );
};
