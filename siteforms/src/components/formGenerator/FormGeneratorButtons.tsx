import { Button } from "@mui/material";
import { FormButtonsArea, SubmitButton } from "./formGeneratorStyles";
import { IButtonProps } from "../../interfaces/iButtonGroup";

type FormButtonsProps = {
  buttons?: IButtonProps[];
};

export const FormGeneratorButtons = (props: FormButtonsProps) => {
  return (
    <FormButtonsArea>
      <SubmitButton type="submit">Submit</SubmitButton>
      {props.buttons &&
        props.buttons?.map((button, index) => (
          <Button
            key={index}
            href={button.link}
            variant="contained"
            style={button.style}
            component="a"
          >
            {button.text}
          </Button>
        ))}
    </FormButtonsArea>
  );
};
